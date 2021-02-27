import { useQuery } from "@apollo/client"
import gql from "graphql-tag"
import Product from "./Product"

export const ALL_PRODUCTS_QUERY = gql`
  query ALL_PRODUCTS_QUERY {
    allProducts {
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

const Products: React.FunctionComponent = () => {
  const { data, error, loading } = useQuery(ALL_PRODUCTS_QUERY)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error?.message}</p>
  return (
    <div>
      <div>
        {data?.allProducts?.map((product: any) => (
          <Product key={product?.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Products
