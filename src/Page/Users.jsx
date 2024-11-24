import { useLoaderData } from "react-router-dom"

function Users() {
    const loaderData = useLoaderData();
  return (
    <div>
      <h2>{loaderData.length}</h2>
    </div>
  )
}

export default Users
