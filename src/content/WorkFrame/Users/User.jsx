import React from 'react'
import {NavLink} from "react-router-dom";
import userPhoto from "../../../image/user.png";
import s from "./Users.module.css";

const User = ({user, followingInProgress, unfollow, follow}) => {
    return (
        <div >
            <div>
                <NavLink to={'/profile/' + user.id}>
                    <img
                        src={user.photos.small != null ? user.photos.small : userPhoto}
                        className={s.photo}
                        alt='user'
                    />
                </NavLink>
            </div>
            <div>
                {user.followed
                    ? <button disabled={followingInProgress.some(id => id === user.id)}
                              onClick={() => {
                                  unfollow(user.id)
                              }}>Unfollow</button>
                    : <button disabled={followingInProgress.some(id => id === user.id)}
                              onClick={() => {
                                  follow(user.id)
                              }}>Follow</button>}
            </div>
            <div>
                <p>{user.name}</p>
                <p>{user.status}</p>
            </div>
            <div>
                <p>u.location.country</p>
                <p>u.location.city</p>
            </div>
        </div>
    )
}

export default User