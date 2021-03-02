const DisplayError = ({ error }: any) => {
  if (!error || !error.message) return null
  if (error.networkError && error.networkError.result && error.networkError.result.errors.length) {
    return error.networkError.result.errors.map((error: any, i: any) => (
      <div key={i}>
        <p>
          <strong>Shoot!</strong>
          {error.message.replace("GraphQL error: ", "")}
        </p>
      </div>
    ))
  }
  return (
    <div>
      <p>
        <strong>Shoot!</strong>
        {error.message.replace("GraphQL error: ", "")}
      </p>
    </div>
  )
}

export default DisplayError
