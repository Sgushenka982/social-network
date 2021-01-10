import { applyMiddleware, combineReducers, createStore } from "redux";
import messagesReducer from "./messages-reducer";
import navbarReducer from "./navbar-reducer";
import newsReducer from "./news-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
import testFiasReducer from "./testFias-reducer";
import authReducer from "./auth-reducer";
import thunkMiddlewere from 'redux-thunk';

let reducers =combineReducers({
    profilePage:profileReducer,
    messagesPage:messagesReducer,
    newsPage:newsReducer,
    navbar:navbarReducer,
    usersPage:usersReducer,
    testPage:testFiasReducer,
    auth:authReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddlewere));

window.store=store;

export default store;
