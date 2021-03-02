import { useQuery } from "@apollo/client"
import gql from "graphql-tag"
import Head from "next/head"
import Link from "next/link"
import DisplayError from "./ErrorMessage"
import { perPage } from "../config"

export const PAGINATION_QUERY = gql`
  query PAGINATION_QUERY {
    _allProductsMeta {
      count
    }
  }
`

const Pagination = ({ page }: any) => {
  const { error, loading, data } = useQuery(PAGINATION_QUERY)
  if (loading) return <p>Loading...</p>
  if (error) return <DisplayError error={error} />
  const { count } = data._allProductsMeta
  const pageCount = Math.ceil(count / perPage)
  return (
    <>
      <Head>
        <title>Atacha - Products</title>
      </Head>
      <Link href={`/products/${page - 1}`}>
        {/* <a classname:styles de desactivado{page >= pageCount}>Next →</a> */}← Prev
      </Link>
      <p>
        Page {page} of {pageCount}
      </p>
      <p>{count} Items Total</p>
      <Link href={`/products/${page + 1}`}>
        {/* <a classname:styles de desactivado{page >= pageCount}>Next →</a> */}
        Next →
      </Link>
    </>
  )
}

export default Pagination
