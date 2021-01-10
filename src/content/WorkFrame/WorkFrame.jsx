import React from 'react';
import MessagesContainer from './Messages/MessagesContainer';
import ProfileContainer from './Profile/ProfileContainer';
import Music from './Music/Music';
import NewsContainer from './News/NewsContainer';
import UsersContainer from './Users/UsersContainer';
import TestContainer from './Test/TestContainer';
import Login from './Login/Login'
import s from './WorkFrame.module.css';
import { Route } from 'react-router-dom';


const WorkFrame = (props) => {
    return (
        <div className={s.item}>
            <Route path='/messages' render={() => <MessagesContainer  />} />
            <Route path='/profile/:userId?' render={() => <ProfileContainer  />} />
            <Route path='/music' component={Music} />
            <Route path='/news' render={() => <NewsContainer />} />
            <Route path='/users' render={() => <UsersContainer />} />
            <Route path='/test' render={() => <TestContainer />} />
            <Route path='/login' render={() => <Login />} />
        </div>
    )
}
export default WorkFrame;