import { useForm } from "react-hook-form"
import { useRouter } from "next/router"
import { useAuth } from "../hooks/useAuth"

const ResetPasswordForm: React.FC = () => {
  const { register, errors, handleSubmit } = useForm()
  const auth = useAuth()
  const router = useRouter()
  const onSubmit = (data: { email: string }) => {
    auth.sendPasswordResetEmail(data.email)
    router.push("/login")
  }
  const regEX: RegExp = /\S+@\S+\.\S+/
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
              required: "Por favor ingresa el email registrado",
              pattern: {
                value: regEX,
                message: "Email no valido",
              },
            })}
          />
          {errors.email && <div>{errors.email.message}</div>}
        </div>
      </div>
      <div>
        <span>
          <button type="submit">Restrablecer</button>
        </span>
      </div>
    </form>
  )
}
export default ResetPasswordForm
