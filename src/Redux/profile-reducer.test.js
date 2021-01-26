import profileReducer, {addPost, deletePost} from "./profile-reducer";

let state = {
    posts: [
        { id: 1, message: 'блабла', likeCount: 23 },
        { id: 2, message: 'ляля', likeCount: 212 },
        { id: 3, message: 'Когда уже пойму реакт', likeCount: 123 }
    ]
}

test('length of posts should be incremented', () => {
    //1. test data
    let action =addPost('My first Test');
    //2. action
    let newState = profileReducer(state,action)

    //expectation
    expect(newState.posts.length).toBe(4)
});


test('message of newPost sholud be correct',()=>{
    let action =addPost('My first Test');
    //2. action
    let newState = profileReducer(state,action)

    //expectation
    expect(newState.posts[3].message).toBe('My first Test')
});

test('after deleting length of messages should be decremented',()=>{
    // 1. test data
    let action =deletePost(1);
    //2. action
    let newState = profileReducer(state,action)
    //3. expectation
    expect(newState.posts.length).toBe(2)
});

test(`after deleting length of messages shouldn't be decremented if id was incorrect`,()=>{
    // 1. test data
    let action =deletePost(1000);
    //2. action
    let newState = profileReducer(state,action)
    //3. expectation
    expect(newState.posts.length).toBe(3)
});
