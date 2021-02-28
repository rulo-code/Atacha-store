import Link from "next/link"
import SingUpForm from "../components/SingUpForm"

const Register: React.FC = () => {
  return (
    <div>
      <h2>Registro</h2>
      <p>
        ¿Ya tiene una cuenta?{" "}
        <Link href="/login">
          <a href="#">¡Ingresa!</a>
        </Link>
      </p>
      <SingUpForm />
    </div>
  )
}
export default Register
