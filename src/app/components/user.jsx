import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import api from "../api";
import QualitiesList from "./qualitiesList";

const User = ({ match, history }) => {
    console.log(history);
    const [user, setUser] = useState();
    const userId = match.params.userId;
    const handlerBackToAllUsers = () => {
        history.push("/allUsers");
    };

    useEffect(() => {
        api.users.getById(userId).then((data) => setUser(data));
    }, []);

    if (user) {
        return (
            <>
                <h2>{user.name}</h2>
                <h3>Профессия: {user.profession.name}</h3>
                <h3>
                    <QualitiesList qualities={user.qualities} />
                </h3>
                <h3>Встретился раз: {user.completedMeetings}</h3>
                <h3>Рейтинг: {user.rate}</h3>

                <button
                    onClick={() => {
                        handlerBackToAllUsers();
                    }}
                >
                    Все пользователи
                </button>
            </>
        );
    }
    return "loading...";
};

User.propTypes = {
    match: PropTypes.object.isRequired,
    user: PropTypes.object,
    history: PropTypes.object
};

export default User;
