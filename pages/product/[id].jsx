import SingleProduct from "../../components/SingleProduct"

const Producto = ({ query }) => {
  return <SingleProduct id={query.id} />
}

export default Producto
