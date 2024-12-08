import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
  const loadedUser = useLoaderData();
  const [users, setUsers] = useState(loadedUser);
  return (
    <div>
      Users: {users.length}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>email</th>
              <th>Abc</th>
              <th>Abc</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user) => (
              <tr key={user._id}>
                <th>1</th>
                <td>
                  <img src={user.image} alt="" className="w-12 rounded-full" />
                </td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
