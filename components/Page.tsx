import React from "react"
import Header from "./Header"
import Navbar from "./Navbar"
import styles from "../assets/styles/components/Page.module.scss"

interface IProps {
  children: React.ReactNode
}

const Page: React.FC<IProps> = ({ children }) => {
  return (
    <main className={styles.main}>
      <Header />
      {children}
      <Navbar />
    </main>
  )
}

export default Page
