const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postsData: [
        {id: 1, message: 'Hi, how are you?', likesCount: 3},
        {id: 2, message: 'It\'s my first post', likesCount: 14}
    ],
    newPostText: '',
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let text = state.newPostText
            return {
                ...state,
                postsData: [...state.postsData, {id:3, message: text, likesCount: 0}],
                newPostText: '',
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText,
            }
        default:
            return state;
    }
}


export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default profileReducer