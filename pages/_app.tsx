import * as React from "react"
import { AppProps } from "next/app"
import { ApolloProvider } from "@apollo/client"
import { AuthProvider } from "../hooks/useAuth"
import Page from "../components/Page"

import Router from "next/router"
import Head from "next/head"
import WithData from "../lib/WithData"

import Nprogress from "nprogress"
import "nprogress/nprogress.css"
import "../assets/styles/Global.scss"

Router.events.on("routeChangeStart", () => Nprogress.start())
Router.events.on("routeChangeComplete", () => Nprogress.done())
Router.events.on("routeChangeError", () => Nprogress.done())

function MyApp({ Component, pageProps, apollo }: AppProps | any): JSX.Element {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Atacha</title>
      </Head>
      <Page>
        <ApolloProvider client={apollo}>
          <AuthProvider>
            <Component {...pageProps} />
          </AuthProvider>
        </ApolloProvider>
      </Page>
    </>
  )
}

MyApp.getInitialProps = async ({ Component, ctx }: AppProps | any) => {
  let pageProps = { query: {} }
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }
  pageProps.query = ctx.query
  return { pageProps }
}

export default WithData(MyApp)
