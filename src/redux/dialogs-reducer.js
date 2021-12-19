const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'


let initialState = {
    dialogData: [
        {
            id: 1,
            name: 'Vlad',
            avatar: <img
                src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg3o8FrMr_MkWHpiLuDOr-13ZhTUAY6ijTz6Nh5dygapOo4ppn1gagOtS690zVlQMcFso&usqp=CAU'}/>
        },
        {
            id: 2,
            name: 'Christina',
            avatar: <img
                src={'https://birds-piggies.ru/uploads/posts/2016-12/1482931343_avatarki-angry-birds-1.jpg'}/>
        },
        {
            id: 3,
            name: 'Kirill',
            avatar: <img src={'https://www.meme-arsenal.com/memes/be50e6ba99654b5455027dcc82beb5b3.jpg'}/>
        },
        {
            id: 4,
            name: 'Matvei',
            avatar: <img src={'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg'}/>
        },
    ],
    messageData: [
        {message: 'Hi'},
        {message: 'Hello World'},
        {message: 'React it`s cool'},
        {message: 'Yo'},
    ],
    newMessageBody: '',
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                message: state.newMessageBody,
            }
            state.messageData.push(newMessage);
            state.newMessageBody = '';
            return state
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageBody = action.newText;
            return state;
        default:
            return state;
    }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text});

export default dialogsReducer