import profileReducer, {actions} from "./profile-reducer";

let state = {
    postsData: [
        {id: 1, message: 'Hi, how are you?', likesCount: 3},
        {id: 2, message: 'It\'s my first post', likesCount: 14},
    ],
    profile: null,
    status: '',
    newPostText: ''
}

it('length of post should be increment', () => {
    //1. test data
    let action = actions.addPostActionCreator("Io Po Jo")
    //2. action
    let newState = profileReducer(state, action)
    //3. expectation
    expect(newState.postsData.length).toBe(3)
});

it('message of new post should be correct', () => {
    //1. test data
    let action = actions.addPostActionCreator("Io Po Jo")
    //2. action
    let newState = profileReducer(state, action)
    //3. expectation
    expect(newState.postsData[2].message).toBe("Io Po Jo")
});

it('after deleting length of message should be decrement', () => {
    //1. test data
    let action = actions.deletePost(1)
    //2. action
    let newState = profileReducer(state, action)
    //3. expectation
    expect(newState.postsData.length).toBe(1)
});
