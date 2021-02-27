import React from "react"
import Image from "next/image"

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
      <div>
        <Image src={imageUrl} alt="baúl" layout="responsive" width={168} height={168} />
        <p>{content}</p>
      </div>
    )
  } else {
    return null
  }
}

export default Component
