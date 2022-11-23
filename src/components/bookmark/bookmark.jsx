import React from "react";
import style from "./style.module.css";
import bookmarkTrue from "./bookmarkTrue.svg";
import bookmarkFalse from "./bookmarkFalse.svg";
import PropTypes from "prop-types";

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

Bookmark.propTypes = {
    status: PropTypes.bool.isRequired
};

export default Bookmark;
