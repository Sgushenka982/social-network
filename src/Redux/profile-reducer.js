import { profileAPI } from '../api/api'

const ADD_POST = 'profile/ADD_POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_STATUS = 'profile/SET_STATUS';
const DELETE_POST = 'profile/DELETE_POST';



let initialState = {
    posts: [
        { id: 1, message: 'блабла', likeCount: 23 },
        { id: 2, message: 'ляля', likeCount: 212 },
        { id: 3, message: 'Когда уже пойму реакт', likeCount: 123 }
    ],
    profile: null,
    status:''
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.posts.length +1,
                message: action.newPost,
                likeCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost]
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p=>p.id!==action.postId)
            }
        default:
            return state
    }
}

export const addPost = (newPost) => ({ type: ADD_POST, newPost });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });
export const deletePost = (postId) => ({ type: DELETE_POST, postId });

export const getProfile = (userId) =>async (dispatch) => {
    let response = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(response.data))
}
export const getUserStatus = (userId) =>async  (dispatch) => {
    let response = await profileAPI.getSatus(userId)
    dispatch(setStatus(response.data))
}
export const updateUserStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
            if(response.data.resultCode === 0 ){
                dispatch(setStatus(status))
            }
}

export default profileReducer