let initialState={
    news:[
        {id:1,imgScr:"demo.holathemes.com/simplest-html/assets/images/post/img-1.jpg",likeCount:123},
        {id:2,imgScr:'demo.holathemes.com/simplest-html/assets/images/post/img-4.jpg',likeCount:63}
      ]
}

const newsReducer=(state =initialState,action)=>{
    switch (action.type) {
        default:
                return state;
    }
}
export default newsReducer