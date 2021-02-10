import React, { Suspense } from 'react';
import MessagesContainer from './Messages/MessagesContainer';
import ProfileContainer from './Profile/ProfileContainer';
//import Music from './Music/Music';
import UsersContainer from './Users/UsersContainer';
import Login from './Login/Login'
import s from './WorkFrame.module.css';
import { Route } from 'react-router-dom';

const TestContainer = React.lazy(() => import('./Test/TestContainer'));
const NewsContainer = React.lazy(() => import('./News/NewsContainer'));
const Music = React.lazy(() => import('./Music/Music'));



const WorkFrame = (props) => {
    return (
        <div className={s.item}>
            <Route path='/messages' render={() => <MessagesContainer />} />
            <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
            <Route path='/users' render={() => <UsersContainer />} />
            <Route path='/login' render={() => <Login />} />
            <Route path='/test' render={() => {
                return <Suspense fallback={<div>Loading...</div>}>
                    <TestContainer />
                </Suspense>
            }} />
            <Route path='/music' render={() => {
                return <Suspense fallback={<div>Loading...</div>}>
                    <Music />
                </Suspense>
            }} />
            <Route path='/news' render={() => {
                return <Suspense fallback={<div>Loading...</div>}>
                    <NewsContainer />
                </Suspense>
            }} />
        </div>
    )
}
export default WorkFrame;