import profileReducer from "./profile-reducer"
import messagesReducer from "./messages-reducer"




let store={
  _state:{
    massegesPage:{
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
    },
    newsPage:{
      news:[
        {id:1,imgScr:"demo.holathemes.com/simplest-html/assets/images/post/img-1.jpg",likeCount:123},
        {id:2,imgScr:'demo.holathemes.com/simplest-html/assets/images/post/img-4.jpg',likeCount:63}
      ]
    },
    profilePage:{
      posts:[
        {id:1,message:'блабла',likeCount:23},
        {id:2,message:'ляля',likeCount:212},
        {id:3,message:'Когда уже пойму реакт',likeCount:123}
      ],
      newPostText:''
    },
    navbar:['Messages','Profile','Music','News']
  },
  getState(){
    return this._state
  },
  _callSubcriber(){
    console.log('state changed')
  },
  subscribe(observer){
    this._callSubcriber=observer;
  },
  dispatch(action){
    this._state.profilePage=profileReducer(this._state.profilePage,action)
    this._state.massegesPage=messagesReducer(this._state.massegesPage,action)
    this._callSubcriber(this._state)

  }
}



 export default store;
 window.store=store;

  