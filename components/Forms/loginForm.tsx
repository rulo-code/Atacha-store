import { useState } from "react"
import { useForm } from "react-hook-form"
import { useAuth } from "../../hooks/useAuth"
import { useRouter } from "next/router"
import Link from "next/link"

interface LoginData {
  email: string
  password: string
}

const LoginForm: React.FC = () => {
  const [error, setError] = useState(null)
  const { register, errors, handleSubmit } = useForm()
  const auth = useAuth()
  const router = useRouter()

  const onSubmit = (data: LoginData) => {
    setError(null)
    return auth.signIn(data).then((response) => {
      response.error ? setError(response.error) : router.push("/account")
    })
  }

  const reCorto: RegExp = /\S+@\S+\.\S+/

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="email">Email</label>
        <div>
          <input
            id="email"
            type="email"
            name="email"
            ref={register({
              required: "Por favor ingresa tu email",
              pattern: {
                value: reCorto,
                message: "Email no valido",
              },
            })}
          />
          {errors.email && <div>{errors.email.message}</div>}
        </div>
      </div>
      <div className="mt-6">
        <label htmlFor="password">Contraseña</label>
        <div>
          <input
            id="password"
            type="password"
            name="password"
            ref={register({
              required: "Por favor ingresa una contraseña",
              minLength: {
                value: 6,
                message: "Debe tener al menos 6 caracteres",
              },
            })}
          />
          {errors.password && <div>{errors.password.message}</div>}
        </div>
      </div>
      <div className="mt-6">
        <span>
          <button type="submit">Ingresar</button>
        </span>
      </div>
      <div>
        <Link href="/resetPassword">
          <a href="#">¿Olvidaste tu contraseña?</a>
        </Link>
      </div>
      {error?.message && (
        <div>
          <span>{error.message}</span>
        </div>
      )}
    </form>
  )
}
export default LoginForm
