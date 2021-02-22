import Link from "next/link"
import React from "react"
import Image from "next/image"

import styles from "./Navbar.module.scss"

const Navbar: React.FC = () => {
  return (
    <div className={styles.navbar}>
      <Link href="/inventario">
        <div className={styles.navbarItem}>
          <div className={styles.image}>
            <Image src="/images/mochila.png" alt="logo" layout="responsive" width={0} height={0} />
          </div>
          <p className={styles.label}>Inventario</p>
        </div>
      </Link>
      <Link href="/mercadillo">
        <div className={styles.navbarItem}>
          <div className={styles.image}>
            <Image
              src="/images/mercadillo.png"
              alt="logo"
              layout="responsive"
              width={0}
              height={0}
            />
          </div>
          <p className={styles.label}>Mercadillo</p>
        </div>
      </Link>
      <Link href="/deseos">
        <div className={styles.navbarItem}>
          <div className={styles.image}>
            <Image src="/images/dreams.png" alt="logo" layout="responsive" width={0} height={0} />
          </div>
          <p className={styles.label}>Deseos</p>
        </div>
      </Link>
    </div>
  )
}

export default Navbar
