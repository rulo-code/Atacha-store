import gql from "graphql-tag"
import { useMutation } from "@apollo/client"
import DisplayError from "./ErrorMessage"

const DELETE_PRODUCT_MUTATION = gql`
  mutation DELETE_PRODUCT_MUTATION($id: ID!) {
    deleteProduct(id: $id) {
      id
    }
  }
`

const DeleteProduct: React.FC = ({ id, children }) => {
  const [deleteProduct, { loading, error }] = useMutation(DELETE_PRODUCT_MUTATION, {
    variables: { id },
  })

  const handleClick = () => {
    if (confirm("¿Seguro que deseas eleminar este producto?")) {
      deleteProduct()
    }
  }
  return (
    <>
      <DisplayError error={error} />
      <button type="button" onClick={handleClick} disabled={loading}>
        {children}
      </button>
    </>
  )
}

export default DeleteProduct
