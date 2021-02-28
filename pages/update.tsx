import UpdateProduct from "../components/UpdateProduct"

const MarketPlace: React.FC = ({ query }): JSX.Element => {
  return (
    <div>
      <UpdateProduct id={query?.id} />
    </div>
  )
}

export default MarketPlace
