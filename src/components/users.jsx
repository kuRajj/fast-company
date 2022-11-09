import React, { useState } from "react";
import api from "../api";

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());

  const setBageClasses = (qualitie) => {
    let classes = `badge m-2 badge bg-${qualitie.color}`;
    return classes;
  };

  const renderTable = () => {
    return (
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
        <tbody>{renderUsers()}</tbody>
      </table>
    );
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

  const howManyPeopleHaveFunWithMe = (value, words) => {
    value = Math.abs(value) % 100;
    let num = value % 10;
    if (value > 10 && value < 20) return words[2];
    if (num > 1 && num < 5) return words[1];
    if (num === 1) return words[0];
    return words[2];
  };

  const renderMessage = () => {
    if (users.length < 1) {
      return (
        <span
          className="howManyPeopleHaveFunWithMe"
          style={{ background: "rgb(202, 33, 4)" }}
        >
          Ты никому не нужен Т_Т
        </span>
      );
    } else {
      return (
        <>
          <span className="howManyPeopleHaveFunWithMe">
            {users.length}{" "}
            {howManyPeopleHaveFunWithMe(users.length, [
              "человек",
              "человека",
              "человек",
            ])}{" "}
            тусанет с тобой сегодня
          </span>
          {renderTable()}
        </>
      );
    }
  };

  return renderMessage();
};

export default Users;
