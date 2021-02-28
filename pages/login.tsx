import Link from "next/link"
import LoginForm from "../components/Forms/loginForm"
import styles from "./login.module.scss"
import Carousel from "react-elastic-carousel"
import Slider from "react-slick"
import Image from "next/image"
import IntroSlider from "../components/IntroCarousel/IntroSlider"

const LoginPage: React.FC = () => {
  const introData = [
    {
      content: "Brinda a tu vida la posibilidad de cumplir todo aquello que siempre has deseado",
      image: "../public/images/inventario2.gif",
    },
    {
      title: "¡Muy útil!",
      content: "Vitau conserva mi salud, me deja más tiempo y más tranquilo con su compromiso.",
      patientName: "Beto Drexel",
      patientStatus: "Paciente con epilepsia postraumática",
      patientAvatar: "",
    },
  ]
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 2000,
    autoplaySpeed: 5000,
  }
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ]

  return (
    <>
      <IntroSlider />
      <LoginForm />
    </>
  )
}
export default LoginPage
