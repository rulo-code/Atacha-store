import { useMutation } from "@apollo/client"
import { ALL_PRODUCTS_QUERY } from "./Products"
import gql from "graphql-tag"
import useForm from "../hooks/useForm"
import Router from "next/router"

const CREATE_PRODUCT_MUTATION = gql`
  mutation CREATE_PRODUCT_MUTATION(
    # Which variables are getting passed in? And What types are they
    $name: String!
    $description: String!
    $price: Int!
    $image: Upload
  ) {
    createProduct(
      data: {
        name: $name
        description: $description
        price: $price
        status: "AVAILABLE"
        photo: { create: { image: $image, altText: $name } }
      }
    ) {
      id
      price
      description
      name
    }
  }
`

const CreateProduct = () => {
  const { inputs, handleChange, clearForm, resetForm } = useForm({
    image: "",
    name: "",
    price: 0,
    description: "",
  })
  const [createProduct, { loading, error, data }] = useMutation(CREATE_PRODUCT_MUTATION, {
    variables: inputs,
    refetchQueries: [{ query: ALL_PRODUCTS_QUERY }],
  })
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault()
        // Submit the inputfields to the backend:
        const res = await createProduct()
        clearForm()
        Router.push({
          pathname: `/product/${res.data.createProduct.id}`,
        })
      }}
    >
      {error ? <p>{error?.message}</p> : null}
      {data ? <p>Articulo Creado</p> : null}
      <fieldset disabled={loading}>
        <label htmlFor="image">
          Imagen
          <input required type="file" id="image" name="image" onChange={handleChange} />
        </label>
        <label htmlFor="name">
          Nombre
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={inputs.name}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="price">
          Precio
          <input
            type="number"
            id="price"
            name="price"
            placeholder="price"
            value={inputs.price}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="description">
          Descripcion
          <textarea
            id="description"
            name="description"
            placeholder="Description"
            value={inputs.description}
            onChange={handleChange}
          />
        </label>

        <button type="submit">+ Agregar</button>
      </fieldset>
    </form>
  )
}
export default CreateProduct
