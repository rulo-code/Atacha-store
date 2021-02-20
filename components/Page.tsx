import React from "react"
import Header from "./Header"
interface IProps {
  children: React.ReactNode
}
const Page: React.FC<IProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default Page
