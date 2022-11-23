import React, { useState } from "react";
import Pagination from "../pagination/pagination";
import User from "../user/user";
import style from "./style.module.css";
import PropTypes from "prop-types";
const Users = ({ users, ...rest }) => {
    const count = users.length;
    const pageSize = 4;
    const [curentPage, setCurentPage] = useState(1);

    const handlePageChange = (pageIndex) => {
        setCurentPage(pageIndex);
    };

    const paginate = (items, pageNumber, pageSize) => {
        const startIndex = (pageNumber - 1) * pageSize;
        return [...items].splice(startIndex, pageSize);
    };

    const userCrop = paginate(users, curentPage, pageSize);

    return (
        <div className={style.wrapper}>
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
                                    rest.handleChangeBookmarkStatus(user._id)
                                }
                                deleteUser={() => rest.onDelete(user._id)}
                                key={user._id}
                                id={user._id}
                                name={user.name}
                                qualities={user.qualities}
                                profession={user.profession}
                                completedMeetings={user.completedMeetings}
                                rate={user.rate}
                                bookmark={user.bookmark}
                            />
                        ))}
                    </tbody>
                </table>
            )}
            <Pagination
                itmesCount={count}
                pageSize={pageSize}
                curentPage={curentPage}
                onPageChange={handlePageChange}
            />
        </div>
    );
};

Users.propTypes = {
    users: PropTypes.array.isRequired
};

export default Users;
