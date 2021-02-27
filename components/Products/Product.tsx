import Link from "next/link"

const Product = ({ product }: any) => {
  return (
    <div>
      <img src={product?.photo?.image?.publicUrlTransformed} alt={product.name} />
      <div>
        <Link href={`/product/${product?.id}`}>{product?.name}</Link>
      </div>
      <p>{product?.price}</p>
      <p>{product?.description}</p>
      {/* TODO: Add buttons to edit and delte item */}
    </div>
  )
}
export default Product
