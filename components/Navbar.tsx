import Link from "next/link"
import React from "react"
import Mochila from "../assets/mochila.png"
import Mercadillo from "../assets/mercadillo.png"
import Dreams from "../assets/dreams.png"
import styled from "styled-components"

const NavBarStyles = styled.nav`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;

  background-color: #312b2b;

  border-radius: 2rem;

  .navbarItem {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;

    color: #fafafa;

    img {
      width: 40px;
      height: 45px;
    }
  }
`

const Navbar: React.FC = () => {
  return (
    <NavBarStyles>
      <Link href="/inventario">
        <a className="navbarItem">
          <img src={Mochila} alt="" />
          <p>Inventario</p>
        </a>
      </Link>
      <Link href="/mercadillo">
        <a className="navbarItem">
          <img src={Mercadillo} alt="" />
          <p>Inventario</p>
        </a>
      </Link>
      <Link href="/deseos">
        <a className="navbarItem">
          <img src={Dreams} alt="" />
          <p>Deseos</p>
        </a>
      </Link>
    </NavBarStyles>
  )
}

export default Navbar
