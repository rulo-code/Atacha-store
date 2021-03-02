import { useQuery } from "@apollo/client"
import gql from "graphql-tag"
import { perPage } from "../config"
import DisplayError from "./ErrorMessage"
import Product from "./Product"

export const ALL_PRODUCTS_QUERY = gql`
  query ALL_PRODUCTS_QUERY($skip: Int = 0, $first: Int) {
    allProducts(first: $first, skip: $skip) {
      id
      name
      price
      description
      photo {
        id
        image {
          publicUrlTransformed
        }
      }
    }
  }
`

const Products: React.FunctionComponent = ({ page }: any) => {
  const { data, error, loading } = useQuery(ALL_PRODUCTS_QUERY, {
    variables: {
      skip: page * perPage - perPage,
      first: perPage,
    },
  })
  if (loading) return <p>Loading...</p>
  return (
    <div>
      <DisplayError error={error?.message} />
      <div>
        {data?.allProducts?.map((product: any) => (
          <Product key={product?.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Products
