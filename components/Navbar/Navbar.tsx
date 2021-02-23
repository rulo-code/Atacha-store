import { useRouter } from "next/router"
import Link from "next/link"
import React from "react"
import Image from "next/image"

import styles from "./Navbar.module.scss"

const Navbar: React.FC = () => {
  const router = useRouter()
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
