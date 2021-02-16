import React from "react"

interface IProps {
  name: string
  children: React.ReactNode
}
const Page: React.FC<IProps> = ({ name, children }) => {
  return (
    <>
      <h2>{name}</h2>
      {children}
    </>
  )
}

export default Page
