import Link from "next/link"
import LoginForm from "../components/Forms/loginForm"

const LoginPage: React.FC = () => {
  return (
    <div>
      <h2>Log in</h2>
      <p>
        {"Don't have an account? "}
        <Link href="/registro">
          <a href="#">Sign Up</a>
        </Link>
      </p>
      <div>
        <LoginForm />
      </div>
    </div>
  )
}
export default LoginPage
