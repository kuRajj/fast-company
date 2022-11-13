import React, { useState } from "react";
import api from "../../api";
import style from "./style.module.css";

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());

  const handleDelet = (id) => {
    setUsers(users.filter((user) => user !== id));
  };

  const renderPhrase = (number) => {
    const lastOne = Number(number.toString().slice(-1));
    if (number > 4 && number < 15) return "человек тусанет";
    if ([2, 3, 4].indexOf(lastOne) >= 0) return "человека тусанет";
    if (lastOne === 1) return "человек тусанет";
    return "человек тусанет";
  };

  return (
    <div className={style.wrapper}>
      <span
        className={`${style.message} ${
          users.length > 0 ? "bg-primary" : "bg-danger"
        }`}
      >
        {users.length > 0
          ? `${users.length} ${renderPhrase(users.length)} с тобой сегодня`
          : "Сегодня посидим дома.."}
      </span>
      {users.length > 0 && (
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретился, раз</th>
              <th scope="col">Оценка</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <th scope="row">{user.name}</th>
                <th scope="row">
                  {user.qualities.map((qualitie) => (
                    <span
                      className={`badge m-2 badge bg-${qualitie.color}`}
                      key={qualitie._id}
                    >
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
                    onClick={() => handleDelet(user)}
                  >
                    delete
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
export default Users;
