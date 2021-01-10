const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
    messeges1:[
    {id:1,message: 'Чего молчишь'},
    {id:2,message: 'Да я занят'},
    {id:3,message: 'А чем?'},
    {id:4,message: 'Чего молчишь'},
    {id:5,message: 'Куда?'}
    ],
    dialogs:[
      {id:1, name:'Артем',lastmessage: 'Куда?'},
      {id:2, name:'Петя',lastmessage:'Как дела?'},
      {id:3, name:'Саша',lastmessage:'ну такое себе'},
      {id:4, name:'Леша',lastmessage:'Домой иду'},
      {id:5, name:'Катя',lastmessage:'Отстань!'}
    ],
    newMessageBody:''
  }

const messagesReducer = (state = initialState, action) => {
    // let updateNewMessageBody=(body)=>{
    //     state.newMessageBody = body
    // }
    // let sendMessage=()=>{
    //     let text = { id: 6, message: state.newMessageBody }
    //     state.messeges1.push(text)
    //     state.newMessageBody = ''
    // }

    switch (action.type) {
        case SEND_MESSAGE:
            return{
                ...state,
                messeges1:[...state.messeges1,{ id: 6, message: state.newMessageBody }],
                newMessageBody: ''
            }
            //sendMessage()
        case UPDATE_NEW_MESSAGE_BODY:
            return{
                ...state,
                newMessageBody:action.newBody
            }
            //updateNewMessageBody(action.newBody)
        default:
            return state
    }

}

export const sendMessageCreator=()=>({type:SEND_MESSAGE})
export const updateNewMessageBodyCreator=(body)=>({type:UPDATE_NEW_MESSAGE_BODY,newBody:body})


export default messagesReducer