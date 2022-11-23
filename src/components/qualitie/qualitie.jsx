import React from "react";
import PropTypes from "prop-types";

const Qalitie = ({ color, name, _id }) => {
    return (
        <>
            <span className={`badge m-2 badge bg-${color}`} key={_id}>
                {name}
            </span>
        </>
    );
};

Qalitie.propTypes = {
    color: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    _id: PropTypes.string
};

export default Qalitie;
