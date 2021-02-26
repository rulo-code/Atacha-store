import { useForm } from "react-hook-form"
import { useAuth } from "../../hooks/useAuth"
import { useRouter } from "next/router"
interface SingUpData {
  name: string
  email: string
  password: string
}

const SignUpForm: React.FC = () => {
  const auth = useAuth()
  const router = useRouter()

  const { register, errors, handleSubmit } = useForm()

  const onSubmit = (data: SingUpData) => {
    auth.signUp(data).then((user: any) => {
      if (user) {
        if (auth.error) {
          auth.setError(null)
        }
        router.push("/login")
      }
    })
  }
  const reCorto: RegExp = /\S+@\S+\.\S+/

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Nombre</label>
        <input
          id="name"
          type="text"
          name="name"
          ref={register({
            required: "Por favor ingresa tu nombre",
          })}
        />
        {errors.name && <div>{errors.name.message}</div>}
      </div>
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
        <label htmlFor="password">Constraseña</label>
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
          <button type="submit">Resgistrame</button>
        </span>
      </div>
    </form>
  )
}
export default SignUpForm
