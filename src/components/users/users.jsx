import React, { useState, useEffect } from "react";
import Pagination from "../pagination/pagination";
import User from "../user/user";
import style from "./style.module.css";
import PropTypes from "prop-types";
import GroupList from "../groupList/groupList";
import api from "../../api";
import SearchStatus from "../searchStatus/searchStatus";

const Users = ({ users, ...rest }) => {
    const pageSize = 4;
    const [curentPage, setCurentPage] = useState(1);
    const [professions, setProfessions] = useState();
    const [selectedProf, setSelectedProf] = useState();

    useEffect(() => {
        api.professions.fetchAll().then((data) => setProfessions(data));
    }, []);

    useEffect(() => {
        setCurentPage(1);
    }, [selectedProf]);

    const handleProfessionSelect = (item) => {
        setSelectedProf(item);
    };

    const handlePageChange = (pageIndex) => {
        setCurentPage(pageIndex);
    };

    const paginate = (items, pageNumber, pageSize) => {
        const startIndex = (pageNumber - 1) * pageSize;
        return [...items].splice(startIndex, pageSize);
    };

    const filterUsers = selectedProf
        ? users.filter(
              (user) =>
                  JSON.stringify(user.profession) ===
                  JSON.stringify(selectedProf)
          )
        : users;

    const count = filterUsers.length;
    const userCrop = paginate(filterUsers, curentPage, pageSize);

    const clearFilter = () => {
        setSelectedProf();
    };

    return (
        <div className={style.wrapper}>
            <div className="d-flex">
                {professions && (
                    <div className="d-flex flex-column flex-shrink-0 p-3">
                        <GroupList
                            selectedItem={selectedProf}
                            items={professions}
                            onItemSelect={handleProfessionSelect}
                        />
                        <button
                            className="btn btn-secondary m-2"
                            onClick={clearFilter}
                        >
                            Очистить
                        </button>
                    </div>
                )}
                <div className="d-flex flex-column">
                    <SearchStatus length={count} />
                    {count > 0 && (
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
                                {userCrop.map((user) => (
                                    <User
                                        handleChangeBookmarkStatus={() =>
                                            rest.handleChangeBookmarkStatus(
                                                user._id
                                            )
                                        }
                                        deleteUser={() =>
                                            rest.onDelete(user._id)
                                        }
                                        key={user._id}
                                        id={user._id}
                                        name={user.name}
                                        qualities={user.qualities}
                                        profession={user.profession}
                                        completedMeetings={
                                            user.completedMeetings
                                        }
                                        rate={user.rate}
                                        bookmark={user.bookmark}
                                    />
                                ))}
                            </tbody>
                        </table>
                    )}
                    <div className="d-flex justify-content-center">
                        <Pagination
                            itmesCount={count}
                            pageSize={pageSize}
                            curentPage={curentPage}
                            onPageChange={handlePageChange}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

Users.propTypes = {
    users: PropTypes.array.isRequired
};

export default Users;
