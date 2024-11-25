import { MdDeleteOutline } from "react-icons/md";
import { BiEdit } from "react-icons/bi";
/* eslint-disable react/prop-types */

function User({ user, index, handleDelete }) {

  return (
    <tr>
      <th>{index + 1}</th>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td className="flex gap-5">
        <BiEdit className=" cursor-pointer text-xl hover:text-gray-100" />{" "}
        <MdDeleteOutline onClick={() => handleDelete(user._id)} className=" cursor-pointer text-xl hover:text-red-300" />
      </td>
    </tr>
  );
}

export default User;
