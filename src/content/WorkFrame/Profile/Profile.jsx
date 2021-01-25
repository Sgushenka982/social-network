import React from 'react';
import s from './Profile.module.css';
import Preloader from '../../Common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus'
import SendPost from "./SendPost";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const Profile = (props) => {
    let postElement = props.state.posts.map(p => <p id={p.id} key={p.id}>{p.message}</p>)

    if (!props.profile) {
        return (
            <Preloader />
        )
    }
    return (
        <div>
            <div className={s.content}>
                {/* <img className={s.photo} src="http://demo.holathemes.com/simplest-html/assets/images/avatars/avatar-4.jpg" alt="Фото" />
                <div>Иванов иван иванович</div>
                <div>19.08.1987</div>
                <div>Привет, ищу друзей!</div> */}
                <img className={s.photo} src={props.profile.photos.large} alt="avatar" />
                <div>{props.profile.aboutMe}</div>
                <div>{props.profile.fullName}</div>
                <div>{props.profile.lookingForAJobDescription}</div>
            </div>
            <ProfileStatusWithHooks status={props.state.status} updateUserStatus={props.updateUserStatus}/>
            <h3>My posts</h3>
            <SendPost addPost={props.addPost}/>
            {postElement}
        </div>

    )

}
export default Profile;