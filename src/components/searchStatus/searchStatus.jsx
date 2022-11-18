import React from "react";
import style from "./style.module.css";

const SearchStatus = ({ length }) => {
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
          length > 0 ? "bg-primary" : "bg-danger"
        }`}
      >
        {length > 0
          ? `${length} ${renderPhrase(length)} с тобой сегодня`
          : "Сегодня посидим дома.."}
      </span>
    </div>
  );
};
export default SearchStatus;
