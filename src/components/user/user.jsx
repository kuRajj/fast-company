import React from "react";
import Qalitie from "../qualitie/qualitie";
import Bookmark from "../bookmark/bookmark";

const User = (props) => {
  // console.log(props);
  return (
    <>
      <tr key={props._id}>
        <th scope="row">{props.name}</th>
        <th scope="row">
          {props.qualities.map((qualitie) => (
            <Qalitie
              key={qualitie._id}
              color={qualitie.color}
              name={qualitie.name}
            />
          ))}
        </th>
        <th scope="row">{props.profession.name}</th>
        <th scope="row">{props.completedMeetings}</th>
        <th scope="row">{props.rate}</th>
        <th>
          <button
            className="btn btn-danger btn-sm m-1"
            onClick={() => props.deleteUser(props._id)}
          >
            delete
          </button>
        </th>
      </tr>
    </>
  );
};

export default User;
