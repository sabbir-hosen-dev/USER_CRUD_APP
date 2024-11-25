import { MdDeleteOutline } from "react-icons/md";
import { BiEdit } from "react-icons/bi";
import { Link } from "react-router-dom";
/* eslint-disable react/prop-types */

function User({ user, index, handleDelete,}) {
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td className="flex gap-5">
        <Link state={{user:user}} to="/users/edit">
          <BiEdit className=" cursor-pointer text-xl hover:text-gray-100" />
        </Link>{" "}
        <MdDeleteOutline
          onClick={() => handleDelete(user._id)}
          className=" cursor-pointer text-xl hover:text-red-300"
        />
      </td>
    </tr>
  );
}

export default User;
