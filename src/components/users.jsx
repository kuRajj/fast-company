import React, { useState } from "react";
import api from "../api";

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());

  const setBageClasses = (qualitie) => {
    let classes = `badge m-2 badge bg-${qualitie.color}`;
    return classes;
  };

  const renderUsers = () => {
    return users.map((user) => (
      <tr key={user._id}>
        <th scope="row">{user.name}</th>
        <th scope="row">
          {user.qualities.map((qualitie) => (
            <span className={setBageClasses(qualitie)} key={qualitie._id}>
              {qualitie.name}
            </span>
          ))}
        </th>
        <th scope="row">{user.profession.name}</th>
        <th scope="row">{user.completedMeetings}</th>
        <th scope="row">{user.rate}</th>
        <th>
          <button
            className="btn btn-danger btn-sm m-1"
            onClick={() => handleDeleteUser(user)}
          >
            delete
          </button>
        </th>
      </tr>
    ));
  };

  const handleDeleteUser = (id) => {
    setUsers((prevState) => prevState.filter((user) => user !== id));
  };

  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">Имя</th>
          <th scope="col">Качества</th>
          <th scope="col">профессия</th>
          <th scope="col">Встретился, раз</th>
          <th scope="col">Оценка</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>{renderUsers()}</tbody>
    </table>
  );
};

export default Users;
