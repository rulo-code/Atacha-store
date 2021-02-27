import gql from "graphql-tag"
import Product from "./Product"
import { useQuery } from "@apollo/client"

const ALL_PRODUCTS_QUERY = gql`
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
  if (error) {
    return <p>{error.message}</p>
  }
  return (
    <div>
      {data.allProducts.map((product) => {
        ;<h2>{product.name}</h2>
      })}
      <Product />
    </div>
  )
}

export default Products
