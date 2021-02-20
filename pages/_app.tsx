import * as React from "react"
import { AppProps } from "next/app"
import Page from "../components/Page"
import Head from "next/head"

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Atacha</title>
      </Head>
      <Page>
        <Component {...pageProps} />
      </Page>
    </>
  )
}
