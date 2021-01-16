import { profileAPI } from '../api/api'

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';



let initialState = {
    posts: [
        { id: 1, message: 'блабла', likeCount: 23 },
        { id: 2, message: 'ляля', likeCount: 212 },
        { id: 3, message: 'Когда уже пойму реакт', likeCount: 123 }
    ],
    newPostText: '',
    profile: null,
    status:''
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 4,
                message: state.newPostText,
                likeCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        default:
            return state
    }
}

export const addPost = () => ({ type: ADD_POST });
export const updateNewPost = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });

export const getProfile = (userId) => (dispatch) => {
    profileAPI.getProfile(userId).then(response => { dispatch(setUserProfile(response.data)) })
}
export const getUserStatus = (userId) => (dispatch) => {
    profileAPI.getSatus(userId).then(response => { dispatch(setStatus(response.data)) })
}
export const updateUserStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
            if(response.data.resultCode === 0 ){dispatch(setStatus(status))}
        })
}

export default profileReducer