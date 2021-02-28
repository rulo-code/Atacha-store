import { useState } from "react"
import { useForm } from "react-hook-form"
import { useAuth } from "../../hooks/useAuth"
import { useRouter } from "next/router"

import Image from "next/image"
import Link from "next/link"

import styles from "./loginForm.module.scss"

interface LoginData {
  email: string
  password: string
}

const LoginForm: React.FC = () => {
  const [error, setError] = useState({
    code: "",
    message: "",
  })
  const [emailLogin, setEmailLogin] = useState(false)
  const { register, errors, handleSubmit } = useForm()
  const auth = useAuth()
  const router = useRouter()

  const onSubmit = (data: LoginData) => {
    setError({
      code: "",
      message: "",
    })
    return auth.signIn(data).then((response: any) => {
      response?.error ? setError(response.error) : router.push("/account")
    })
  }
  const loginFB = () => {
    setError({
      code: "",
      message: "",
    })
    return auth.fbLogin().then((response: any) => {
      response?.error ? setError(response.error) : router.push("/account")
    })
  }

  const loginGoogle = () => {
    setError({
      code: "",
      message: "",
    })
    return auth.ggLogin().then((response: any) => {
      response?.error ? setError(response.error) : router.push("/account")
    })
  }

  const reCorto: RegExp = /\S+@\S+\.\S+/

  return (
    <div className={styles.loginForm}>
      {emailLogin ? (
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
      ) : (
        <>
          <div>
            <button
              onClick={() => {
                setEmailLogin(true)
              }}
              className={styles.loginOption}
            >
              <div className={styles.imageContainer}>
                <Image src="/images/email.svg" alt="logo" width={31} height={31} />
              </div>
              <p>Ingresa con correro electrónico</p>
            </button>
          </div>

          <button onClick={loginGoogle} className={styles.loginOption}>
            <div className={styles.imageContainer}>
              <Image src="/images/google.svg" alt="logo" width={31} height={31} />
            </div>
            <p>Ingresa con Google</p>
          </button>

          <button onClick={loginFB} className={`${styles.loginOption} ${styles.facebookLogin}`}>
            <div className={styles.imageContainer}>
              <Image src="/images/fb.svg" alt="logo" width={31} height={31} />
            </div>
            <p>Ingresa con Facebook</p>
          </button>

          <div className={styles.RegisterOption}>
            <p>¿Eres nuevo en Atacha?</p>
            <div className={styles.resgisterLink}>
              <Link href="/registro">
                <a href="#">Registrate</a>
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
export default LoginForm
