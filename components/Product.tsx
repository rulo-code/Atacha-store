import Link from "next/link"
import DeleteProduct from "./DeleteProduct"

const Product = ({ product }: any) => {
  return (
    <div>
      <img src={product?.photo?.image?.publicUrlTransformed} alt={product.name} />
      <div>
        <Link href={`/product/${product?.id}`}>{product?.name}</Link>
      </div>
      <p>{product?.price}</p>
      <p>{product?.description}</p>
      <div>
        <Link
          href={{
            pathname: "update",
            query: {
              id: product?.id,
            },
          }}
        >
          Editar
        </Link>
        <DeleteProduct id={product?.id}>Eliminar</DeleteProduct>
      </div>
    </div>
  )
}
export default Product
