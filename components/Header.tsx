import Link from "next/link"
import Navbar from "./Navbar"
import styled from "styled-components"
import React from "react"

const HeaderStyles = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;

  .logo-container {
    display: flex;
    justify-content: center;
    align-items: center;

    .logo {
      font-size: 3rem;
    }
  }
  .search {
    border: #212121 solid 2px;
    padding: 1rem;
    border-radius: 2rem;
    width: 80%;
    height: 60px;
    font-size: 1rem;
    margin: 0 auto;
  }
`
const Header: React.FC = () => {
  return (
    <HeaderStyles>
      <div className="logo-container">
        <Link href="/">
          {/* // mejorar seo */}
          <a className="logo">Atacha</a>
        </Link>
      </div>
      <input className="search" type="text" placeholder="Buscar ..." />
      <Navbar />
    </HeaderStyles>
  )
}

export default Header
