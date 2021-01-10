let initialState=[
    {id:'mes', name:'Messages'},
    {id:'prof', name:'Profile'},
    {id:'mus', name:'Music'},
    {id:'new', name:'News'},
    {id:'user',name:'Users'},
    {id:'test', name:'Test'}
]

const navbarReducer = (state=initialState,action)=>{

    switch (action.type) {
        default:
                return state;
    }
}

export default navbarReducer