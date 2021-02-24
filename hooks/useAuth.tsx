import { useContext, createContext, ReactNode } from "react"
import useAuthProvider from "./useAuthProvider"

const authContext = createContext({ user: {} })

const { Provider } = authContext

export const AuthProvider = (props: { children: ReactNode }): JSX.Element => {
  const auth = useAuthProvider()
  return <Provider value={auth}>{props.children}</Provider>
}

export const useAuth: any = () => {
  return useContext(authContext)
}
