import {authAPI} from '../api/api'
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_USER_DATA:

            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }

}
export const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, payload: { userId, email, login, isAuth } })

export const authUser =()=> (dispatch) => {
    return authAPI.authUser().then(response => {
        if (response.resultCode === 0) {
            let { id, email, login } = response.data;
            dispatch(setAuthUserData(id, email, login,true));
        }
    })

}
export const loginUser =(email,passaword,rememberMe)=>(dispatch)=>{
    authAPI.loginUser(email,passaword,rememberMe).then(response=>{
        if(response.data.resultCode === 0){
            dispatch(authUser())
        }else{
            let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
            dispatch(stopSubmit('login',{_error:message}))
        }
    })
}

export const logoutUser =()=>(dispatch)=>{
    authAPI.logoutUser().then(response=>{
        if(response.data.resultCode === 0){
            dispatch(setAuthUserData(null, null, null,false))
        }
    })
}

export default authReducer;