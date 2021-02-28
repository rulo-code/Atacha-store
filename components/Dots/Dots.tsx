import React from "react"
import styles from "./Dots.module.scss"
import { StepData } from "../IntroCarousel/IntroSlider.types"
interface Iprops {
  current: number
  data: StepData[]
}
const Dots: React.FC<Iprops> = ({ data, current }: Iprops) => {
  return (
    <div className={styles.Dots}>
      {data.map((_, index) => {
        return (
          <div
            key={index}
            className={current === index ? `${styles.dotActive} ${styles.dot}` : styles.dot}
          >
            {current === index && (
              <i
                className={current === index ? "fas fa-dot-circle active" : "fas fa-dot-circle"}
              ></i>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default Dots
