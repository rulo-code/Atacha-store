import Link from "next/link"
import SingUpForm from "../components/Forms/singUpForm"

const SignUpPage: React.FC = () => {
  return (
    <div>
      <h2>Sign up</h2>
      <p>
        already have an account?{" "}
        <Link href="/login">
          <a href="#">Log in</a>
        </Link>
      </p>
      <SingUpForm />
    </div>
  )
}
export default SignUpPage
