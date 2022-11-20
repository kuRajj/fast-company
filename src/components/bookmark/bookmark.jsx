import React from "react";
import style from "./style.module.css";
import bookmarkTrue from "./bookmarkTrue.svg";
import bookmarkFalse from "./bookmarkFalse.svg";

const Bookmark = ({ status, ...rest }) => {
  return (
    <button
      onClick={() => rest.handleChangeBookmarkStatus()}
      className={style.div}
    >
      {status === true ? (
        <img src={bookmarkTrue} alt="bookmarkTrue" />
      ) : (
        <img src={bookmarkFalse} alt="bookmarkFalse" />
      )}
    </button>
  );
};

export default Bookmark;
