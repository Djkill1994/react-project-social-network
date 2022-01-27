const ADD_MESSAGE = 'ADD-MESSAGE'

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
                src={'https://pristor.ru/wp-content/uploads/2018/05/%D0%9A%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D1%8B%D0%B5-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D0%BD%D0%B0-%D0%B0%D0%B2%D1%83-%D0%BF%D1%80%D0%BE-%D0%BC%D0%BE%D1%80%D0%B5-%D0%BE%D0%BA%D0%B5%D0%B0%D0%BD-%D0%B2%D0%BE%D0%B4%D1%83-%D1%81%D0%B1%D0%BE%D1%80%D0%BA%D0%B0-2018-11.jpg'}/>
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
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hello World'},
        {id: 3, message: 'React it`s cool'},
        {id: 4, message: 'Yo'},
    ],
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let body = action.newMessageBody
            return {
                ...state,
                messageData: [...state.messageData, {id:5 ,message: body}],
            }
        default:
            return state;
    }
}


export const addMessageActionCreator = (newMessageBody) => ({type: ADD_MESSAGE, newMessageBody});

export default dialogsReducer