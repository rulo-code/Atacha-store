import { useForm } from "react-hook-form"
import { useAuth } from "../../hooks/useAuth"
import { useRouter } from "next/router"

interface LoginData {
  email: string
  password: string
}

const LoginForm: React.FC = () => {
  const { register, errors, handleSubmit } = useForm()
  const auth = useAuth()
  const router = useRouter()

  const onSubmit = (data: LoginData) => {
    return auth.signIn(data).then(() => {
      router.push("/account")
    })
  }

  const reCorto: RegExp = /\S+@\S+\.\S+/

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="email">Email address</label>
        <div>
          <input
            id="email"
            type="email"
            name="email"
            ref={register({
              required: "Please enter an email",
              pattern: {
                value: reCorto,
                message: "Not a valid email",
              },
            })}
          />
          {errors.email && <div>{errors.email.message}</div>}
        </div>
      </div>
      <div className="mt-6">
        <label htmlFor="password">Password</label>
        <div>
          <input
            id="password"
            type="password"
            name="password"
            ref={register({
              required: "Please enter a password",
              minLength: {
                value: 6,
                message: "Should have at least 6 characters",
              },
            })}
          />
          {errors.password && <div>{errors.password.message}</div>}
        </div>
      </div>
      <div className="mt-6">
        <span>
          <button type="submit">Login</button>
        </span>
      </div>
    </form>
  )
}
export default LoginForm
