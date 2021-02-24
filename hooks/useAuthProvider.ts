import { useState, useEffect } from "react"
import { auth, db } from "../config/firebase"

interface UserData {
  name: string
  email: string
  password: string
}

const useAuthProvider = () => {
  const [user, setUser] = useState(null)

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
      return await createUser({ uid: response.user.uid, email, name })
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

  const signIn = async ({ email, password }: UserData) => {
    try {
      const response = await auth.signInWithEmailAndPassword(email, password)
      setUser(response.user)
      getUserAdditionalData(user)
      return response.user
    } catch (error) {
      return { error }
    }
  }

  useEffect(() => {
    const unsub = auth.onAuthStateChanged(handleAuthStateChanged)

    return () => unsub()
  }, [])

  const handleAuthStateChanged = (user: firebase.User) => {
    setUser(user)
    if (user) {
      getUserAdditionalData(user)
    }
  }
  const signOut = async () => {
    await auth.signOut()

    return setUser(false)
  }
  return {
    user,
    signUp,
    signIn,
    signOut,
  }
}
export default useAuthProvider
