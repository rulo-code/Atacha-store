import Link from "next/link"

import ResetPasswordForm from "../components/ReserPaswordForm"

const ResetPassword: React.FC = () => {
  return (
    <div>
      <div>
        <div>
          <h2>Restablecer contraseña</h2>
          <p>
            {"¿La recordaste?"}
            <Link href="/login">
              <a href="#">¡Ingresa!</a>
            </Link>
          </p>
        </div>
        <div>
          <ResetPasswordForm />
        </div>
      </div>
    </div>
  )
}
export default ResetPassword
