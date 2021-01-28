import {authUser} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'app/INITIALIZED_SUCCESS'

let initialState = {
    initialized: false
}

const appReducer= (state=initialState,action)=>{
    switch (action.type){
        case INITIALIZED_SUCCESS:
            return{
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

const initializedSuccess =()=>({type:INITIALIZED_SUCCESS})

export const initializeApp =()=>(dispatch)=>{
    let promise = dispatch(authUser())
    promise.then(()=>{dispatch(initializedSuccess())})
}

export default appReducer