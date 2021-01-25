import React from 'react';
import { NavLink } from 'react-router-dom';
import userPhoto from './../../../image/user.png'
import s from './Users.module.css';

const Users = (props) => {
    let usersElement = props.users.map(u =>
        <div key={u.id}>
            <div>
                <NavLink to={'/profile/' + u.id}>
                    <img
                        src={u.photos.small != null ? u.photos.small : userPhoto}
                        className={s.photo}
                        alt='user'
                    />
                </NavLink>
            </div>
            <div>
                {u.followed
                    ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                        onClick={() => {
                            props.unfollow(u.id)
                        }}>Unfollow</button>
                    : <button disabled={props.followingInProgress.some(id => id === u.id)}
                        onClick={() => {
                            props.follow(u.id)
                        }}>Follow</button>}
            </div>
            <div>
                <p>{u.name}</p>
                <p>{u.status}</p>
            </div>
            <div>
                <p>u.location.country</p>
                <p>u.location.city</p>
            </div>
        </div>)

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let pagesElement = pages.map(p => {
        return (
            <span
                className={props.currentPage === p ? s.selected : null}
                onClick={() => props.onPageChanged(p)}
            >
                {p}
            </span>
        )
    })

    return (
        <div>
            <div>
                {pagesElement}
            </div>
            {usersElement}
        </div>
    )
}



export default Users;