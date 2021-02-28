import { useState, useEffect } from "react"
import { auth, db, fbAuth, googleAuth } from "../config/Firebase"
interface UserData {
  name: string | any
  email: string | any
  password?: string | any
  uid?: string
}
const useAuthProvider = () => {
  const [user, setUser] = useState<UserData>({
    email: "",
    name: "",
    uid: "",
  })

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
      // auth.currentUser.sendEmailVerification()
      return await createUser({ uid: response.user?.uid, email, name })
    } catch (error) {
      return { error }
    }
  }

  const getUserAdditionalData = async (user: any) => {
    const userData = await db.collection("users").doc(user.uid).get()
    console.log(userData.data())
    if (userData) {
      let registeredUser
      registeredUser = userData.data()
      setUser({
        email: registeredUser?.email,
        name: registeredUser?.name,
        uid: registeredUser?.uid,
      })
    }
  }

  const signIn = async ({ email, password }: any) => {
    try {
      const response: any = await auth.signInWithEmailAndPassword(email, password)
      let logedUser
      if (response) {
        logedUser = response.user
        setUser({
          email: logedUser?.email,
          name: logedUser?.name,
          uid: logedUser?.uid,
        })
      }
      setUser(response.user)
      getUserAdditionalData(user)
      return response.user
    } catch (error) {
      return { error }
    }
  }

  const handleAuthStateChanged = (usuario: any) => {
    setUser(usuario)
    if (usuario) {
      getUserAdditionalData(usuario)
    }
  }

  const sendPasswordResetEmail = async (email: any) => {
    const response = await auth.sendPasswordResetEmail(email)
    return response
  }

  const signOut = async () => {
    await auth.signOut()
    return setUser({
      email: "",
      name: "",
      uid: "",
    })
  }

  const fbLogin = async () => {
    try {
      const response = await auth.signInWithPopup(fbAuth)
      setUser({ name: response.user?.displayName, email: response.user?.email })
      if (response?.additionalUserInfo?.isNewUser === true) {
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
      setUser({ name: String(response.user?.displayName), email: response.user?.email })
      if (response?.additionalUserInfo?.isNewUser === true) {
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
        .onSnapshot((doc) => {
          let newUser
          newUser = doc.data()
          setUser({
            email: newUser?.email,
            name: newUser?.name,
            uid: newUser?.uid,
          })
        })
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
