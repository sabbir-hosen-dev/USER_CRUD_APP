/* eslint-disable react/prop-types */
import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom"
import { UserContext } from "../main";



function Edit() {
  const location = useLocation();
  const user = location.state.user

  const {users,setUsers} = useContext(UserContext)

 const navigate = useNavigate()
  const handleEdit = (e) => {
    e.preventDefault();
    const form = e.target;
    const newName = form.name.value;
    const newEmail = form.email.value;

    const newUser = { name: newName, email: newEmail };

    fetch(`http://localhost:600/users/${user._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        const updatedUsers = users.map((u) =>
          u._id === user._id ? { ...u, name: newName, email: newEmail } : u)
          setUsers(updatedUsers)
          form.reset();
  navigate("/users")
          
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex justify-center items-center">
      <form  onSubmit={handleEdit}  className="p-5 shadow-md flex  max-w-[500px] flex-col gap-4 rounded-xl border border-gray-500 " action="">
        <input type="text" name="name" defaultValue={user.name} placeholder="User Name" className="input input-bordered  w-full min-w-[300px] max-w-[500px] " />
        <input type="email" name="email" defaultValue={user.email} placeholder="User Email" className="input input-bordered  w-full min-w-[300px]  max-w-[500px]" />
        <button type="submit" className="btn btn-neutral  max-w-[500px]">Edit User</button>
      </form>
    </div>
  )
}

export default Edit
