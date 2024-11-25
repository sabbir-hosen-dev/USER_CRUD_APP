import { useLoaderData } from "react-router-dom";
import User from "../Components/User";
import { useContext, useEffect } from "react";
import { UserContext } from "../main";

function Users() {
  const loaderData = useLoaderData();


  const {users,setUsers} = useContext(UserContext)

  useEffect(() => {
    setUsers(loaderData)
  },[])


  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:600/users/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const newUsers = users.filter((user) => user._id !== id);
        setUsers(newUsers);
      })
      .catch((err) => console.log(err));
  };



  return (
    <div className="overflow-x-auto">
      <table className="table border border-base-200 rounded-sm">
        {/* head */}
        <thead className="">
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user, index) => (
              <User
                handleDelete={handleDelete}
                key={user._id}
                index={index}
                user={user}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
