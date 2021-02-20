import React from "react"
import { createGlobalStyle } from "styled-components"
import Header from "./Header"
interface IProps {
  children: React.ReactNode
}

const GlobalStyles = createGlobalStyle`

  html {
    --primaryColor: #fafafa;
    width: 100vw;
    overflow-y: hidden;
    border: red solid 1px;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  }
  a {
    color: black;
    text-decoration: none;
  }
`
const Page: React.FC<IProps> = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Header />
      {children}
    </>
  )
}

export default Page
