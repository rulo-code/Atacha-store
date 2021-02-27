import React, { useState } from "react"
import IntroStep from "../IntroStep/IntroStep"
import styles from "./IntroSlider.module.scss"
import Dots from "../Dots/Dots"
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa"
const data = [
  {
    content: "Brinda a tu vida la posibilidad de cumplir todo aquello que siempre has deseado",
    imageUrl: "/images/logo2.png",
  },
  {
    content: "Llena tu baúl con lo que más aprecias o estás dispuesto a cambiar",
    imageUrl: "/images/inventario2.gif",
  },
  {
    content: "Encuentra lo que buscas en el momento que lo deseas",
    imageUrl: "/images/deseos.gif",
  },
  {
    content: "Llega a un trato, cumple un deseo y conviertete en un Genio",
    imageUrl: "/images/trueque.gif",
  },
]

const IntroSlider: React.FC = () => {
  const [current, setCurrent] = useState(0)
  console.log(current)
  const length = data.length
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }
  return (
    <>
      <section className={styles.IntroSlider}>
        <FaArrowAltCircleRight className={styles.leftArrow} onClick={nextSlide} />
        <FaArrowAltCircleLeft className={styles.RightArrow} onClick={prevSlide} />

        {data.map((step, index) => (
          <IntroStep
            index={index}
            current={current}
            key={index}
            imageUrl={step.imageUrl}
            content={step.content}
            data={data}
          />
        ))}
      </section>
      <Dots current={current} data={data} />
    </>
  )
}

export default IntroSlider
