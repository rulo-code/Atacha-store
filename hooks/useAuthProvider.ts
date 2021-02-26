import { useState, useEffect } from "react"
import { auth, db, fbAuth, googleAuth } from "../config/firebase"
interface UserData {
  name: string
  email: string
  password: string
}
const useAuthProvider = () => {
  const [user, setUser] = useState({})

  const createUser = async (user: any) => {
    try {
      await db.collection("users").doc(user.uid).set(user)
      setUser(user)
      return user
    } catch (error) {
      return { error }
    }
  }

  const signUp = async ({ name, email, password }: UserData) => {
    try {
      const response = await auth.createUserWithEmailAndPassword(email, password)
      auth.currentUser.sendEmailVerification()
      return await createUser({ uid: response.user?.uid, email, name })
    } catch (error) {
      return { error }
    }
  }

  const getUserAdditionalData = async (user: firebase.User) => {
    const userData = await db.collection("users").doc(user.uid).get()
    if (userData.data()) {
      setUser(userData.data())
    }
  }

  const signIn = async ({ email, password }) => {
    try {
      const response = await auth.signInWithEmailAndPassword(email, password)
      setUser(response.user)
      getUserAdditionalData(user)
      return response.user
    } catch (error) {
      return { error }
    }
  }

  const handleAuthStateChanged = (usuario: firebase.User) => {
    setUser(usuario)
    if (usuario) {
      getUserAdditionalData(usuario)
    }
  }

  const sendPasswordResetEmail = async (email: UserData) => {
    const response = await auth.sendPasswordResetEmail(email)
    return response
  }

  const signOut = async () => {
    await auth.signOut()
    return setUser(false)
  }

  const fbLogin = async () => {
    try {
      const response = await auth.signInWithPopup(fbAuth)
      setUser({ name: response.user?.displayName, email: response.user?.email })
      if (response.additionalUserInfo.isNewUser === true) {
        return (
          await createUser({
            uid: response.user?.uid,
            email: response.user?.email,
            name: response.user?.displayName,
          }),
          user
        )
      } else {
        getUserAdditionalData(user)
        return user
      }
    } catch (error) {
      return { error }
    }
  }
  const ggLogin = async () => {
    try {
      const response = await auth.signInWithPopup(googleAuth)
      setUser({ name: response.user?.displayName, email: response.user?.email })
      if (response.additionalUserInfo.isNewUser === true) {
        return (
          await createUser({
            uid: response.user?.uid,
            email: response.user?.email,
            name: response.user?.displayName,
          }),
          user
        )
      } else {
        getUserAdditionalData(user)
        return user
      }
    } catch (error) {
      return { error }
    }
  }

  useEffect(() => {
    const unsub = auth.onAuthStateChanged(handleAuthStateChanged)

    return () => unsub()
  }, [])

  useEffect(() => {
    if (user?.uid) {
      // Subscribe to user document on mount
      const unsubscribe = db
        .collection("users")
        .doc(user.uid)
        .onSnapshot((doc) => setUser(doc.data()))
      return () => unsubscribe()
    }
  }, [])

  return {
    user,
    signUp,
    signIn,
    signOut,
    sendPasswordResetEmail,
    fbLogin,
    ggLogin,
  }
}
export default useAuthProvider
