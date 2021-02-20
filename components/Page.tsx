import React from "react"
import Header from "./Header"
interface IProps {
  name: string
  children: React.ReactNode
}
const Page: React.FC<IProps> = ({ name, children }) => {
  return (
    <>
      <Header />
      <h2>{name}</h2>
      {children}
    </>
  )
}

export default Page
