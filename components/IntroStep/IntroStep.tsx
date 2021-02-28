import React from "react"
import Image from "next/image"
import styles from "./IntroStep.module.scss"

interface Iprops {
  imageUrl: string
  content: string
  current: number
  index: number
  data: any
}
const Component: React.FC<Iprops> = ({ imageUrl, content, index, current }: Iprops) => {
  if (index === current) {
    return (
      <div className={styles.IntroStep}>
        <div className={styles.imageContainer}>
          <Image src={imageUrl} alt="baúl" layout="responsive" width={0} height={0} />
        </div>
        <p className={styles.content}>{content}</p>
      </div>
    )
  } else {
    return null
  }
}

export default Component
