import Link from "next/link"
import LoginForm from "../components/Forms/loginForm"

const LoginPage: React.FC = () => {
  return (
    <div>
      <h2>Ingresar</h2>
      <p>
        {"¿No tienes cuenta?"}
        <Link href="/registro">
          <a href="#">¡Registrate!</a>
        </Link>
      </p>
      <div>
        <LoginForm />
      </div>
    </div>
  )
}
export default LoginPage
