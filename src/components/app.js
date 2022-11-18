import React, { useState } from "react";
import SearchStatus from "./searchStatus/searchStatus";
import api from "../api";
import Users from "./users/users";

function App() {
  const [users, setUsers] = useState(api.users.fetchAll());

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user._id !== id));
  };
  return (
    <>
      <SearchStatus length={users.length} />
      <Users users={users} onDelete={handleDelete} />
    </>
  );
}

export default App;
