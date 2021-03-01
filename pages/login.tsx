import Link from "next/link"
import LoginForm from "../components/LoginForm"
import styles from "./login.module.scss"
import Carousel from "react-elastic-carousel"
import Slider from "react-slick"
import Image from "next/image"
import IntroSlider from "../components/IntroSlider"

const LoginPage: React.FC = () => {
  const introData = [
    {
      content: "Brinda a tu vida la posibilidad de cumplir todo aquello que siempre has deseado",
      image: "../public/images/inventario2.gif",
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
