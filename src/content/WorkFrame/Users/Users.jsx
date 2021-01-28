import React from 'react';
import Pagination from "../../Common/Pagination/Pagination";
import User from "./User";

const Users = ({totalUsersCount, pageSize, currentPage, onPageChanged, users, followingInProgress, follow, unfollow}) => {

    let usersElement = users.map(u =>
        <User key={u.id}
              user={u}
              followingInProgress={followingInProgress}
              follow={follow}
              unfollow={unfollow}
        />)

    return (
        <div>
            <Pagination totalUsersCount={totalUsersCount}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChanged={onPageChanged}
            />
            {usersElement}
        </div>
    )
}


export default Users;