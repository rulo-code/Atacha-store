import { useState, useEffect, useContext, createContext, ReactNode } from "react"
import { auth, db } from "../config/firebase"

interface SignUpData {
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

  const signUp = async ({ name, email, password }: SignUpData) => {
    try {
      const response = await auth.createUserWithEmailAndPassword(email, password)
      auth.currentUser.sendEmailVerification()
      return await createUser({ uid: response.user.uid, email, name })
    } catch (error) {
      return { error }
    }
  }

  return {
    user,
    signUp,
  }
}
const authContext = createContext({ user: {} })

const { Provider } = authContext

export function AuthProvider(props: { children: ReactNode }): JSX.Element {
  const auth = useAuthProvider()
  return <Provider value={auth}>{props.children}</Provider>
}

export const useAuth: any = () => {
  return useContext(authContext)
}
