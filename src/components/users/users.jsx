import React from "react";
import User from "../user/user";
import style from "./style.module.css";
const Users = ({ users, ...rest }) => {
  return (
    <div className={style.wrapper}>
      {users.length > 0 && (
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретился, раз</th>
              <th scope="col">Оценка</th>
              <th scope="col">Изранное</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <User
                deleteUser={() => rest.onDelete(user._id)}
                key={user._id}
                id={user._id}
                name={user.name}
                qualities={user.qualities}
                profession={user.profession}
                completedMeetings={user.completedMeetings}
                rate={user.rate}
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Users;
