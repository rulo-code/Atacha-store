import router from "next/router"
import Link from "next/link"
import { useAuth } from "../hooks/useAuth"

const Account: React.FC = () => {
  const auth = useAuth()
  if (!auth.user)
    return (
      <div>
        Debes inicias sesion primero <br />
        <Link href="/login">Incio Sesion</Link>
      </div>
    )

  const handleClick = () => {
    return auth.signOut().then(() => {
      router.push("/")
    })
  }
  return (
    <div>
      <h2>{`Welcome ${auth.user.name}!`}</h2>
      <p>{`You are logged in with ${auth.user.email}`}</p>
      <button onClick={handleClick}>Sign out</button>
    </div>
  )
}
export default Account
