import Link from "next/link"
import styles from "./Header.module.scss"
import Navbar from "../Navbar/Navbar"
import Image from "next/image"
import React from "react"

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logoContainer}>
        <Link href="/">
          {/* // mejorar seo */}
          <a className={styles.logo}>
            <Image src="/images/logo.svg" alt="logo" layout="responsive" width={0} height={0} />
          </a>
        </Link>
      </div>
      <input className={styles.search} type="text" placeholder="Buscar ..." />
    </div>
  )
}

export default Header
