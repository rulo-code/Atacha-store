import { useRouter } from "next/router"
import Link from "next/link"
import React from "react"
import Image from "next/image"
import { useAuth } from "../../hooks/useAuth"

import styles from "./Navbar.module.scss"

const Navbar: React.FC = () => {
  const router = useRouter()
  const { user } = useAuth()

  if (router.pathname == "/" && user!) {
    return null
  }
  return (
    <div className={styles.navbar}>
      <Link href="/inventario">
        <div
          className={router.pathname == "/inventario" ? styles.navbarItemActive : styles.navbarItem}
        >
          <div className={styles.image}>
            <Image src="/images/mochila.png" alt="logo" layout="responsive" width={0} height={0} />
          </div>
        </div>
      </Link>
      <Link href="/mercadillo">
        <div
          className={
            router.pathname == "/mercadillo" || router.pathname == "/"
              ? styles.navbarItemActive
              : styles.navbarItem
          }
        >
          <div className={styles.image}>
            <Image
              src="/images/mercadillo.png"
              alt="logo"
              layout="responsive"
              width={0}
              height={0}
            />
          </div>
        </div>
      </Link>
      <Link href="/deseos">
        <div className={router.pathname == "/deseos" ? styles.navbarItemActive : styles.navbarItem}>
          <div className={styles.image}>
            <Image src="/images/dreams.png" alt="logo" layout="responsive" width={0} height={0} />
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Navbar
