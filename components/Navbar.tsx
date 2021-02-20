import Link from "next/link"
import React from "react"
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
  }
`

const Navbar: React.FC = () => {
  return (
    <NavBarStyles>
      <Link href="/inventario">
        <a className="navbarItem">
          <p>Inventario</p>
        </a>
      </Link>
      <Link href="/mercadillo">
        <a className="navbarItem">
          <p>Inventario</p>
        </a>
      </Link>
      <Link href="/deseos">
        <a className="navbarItem">
          <p>Deseos</p>
        </a>
      </Link>
    </NavBarStyles>
  )
}

export default Navbar
