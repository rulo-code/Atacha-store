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
      <div>
        <Link
          href={{
            pathname: "update",
            query: {
              id: product?.id,
            },
          }}
        >
          Edit
        </Link>
      </div>
    </div>
  )
}
export default Product
