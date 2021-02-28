import Link from "next/link"
import LoginForm from "../components/LoginForm"

const Login: React.FC = () => {
  return (
    <div>
      <h2>Ingresar</h2>
      <p>
        {"¿No tienes cuenta?"}
        <Link href="/register">
          <a href="#">¡Registrate!</a>
        </Link>
      </p>
      <div>
        <LoginForm />
      </div>
    </div>
  )
}
export default Login
