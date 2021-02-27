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
          <div className={current === index ? `${styles.dotActive} ${styles.dot}` : styles.dot}>
            {current === index && (
              <i
                key={index}
                className={current === index ? "far fa-dot-circle active" : "far fa-dot-circle"}
              ></i>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default Dots
