import React, { useState } from "react";
import api from "../api";
import Users from "./users";

export const Message = () => {
  const [mess, setMesss] = useState(api.users.fetchAll());

  return <h1>{Users.users.length} человек</h1>;
};
