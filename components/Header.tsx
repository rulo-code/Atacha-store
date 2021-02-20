import Link from "next/link"
import Navbar from "./Navbar"
import React from "react"

const Header: React.FC = () => {
  return (
    <header>
      <div className="bar">
        <Link href="/">
          {/* // mejorar seo */}
          <a>Sick fits</a>
        </Link>
      </div>
      <div className="sub-bar"></div>
      <p>I am the header</p>
      <Navbar />
    </header>
  )
}

export default Header
