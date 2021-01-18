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
    ]
  }

const messagesReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let idNum = state.messeges1.length+1
            return{
                ...state,
                messeges1:[...state.messeges1,{ id: idNum, message: action.newMessage }],
                newMessageBody: ''
            }
        default:
            return state
    }

}

export const sendMessageCreator=(newMessage)=>({type:SEND_MESSAGE,newMessage})


export default messagesReducer