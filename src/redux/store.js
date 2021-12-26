import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";


let store = {
    _callSubscriber() {

    },
    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: 'Hi, how are you?', likesCount: 3},
                {id: 2, message: 'It\'s my first post', likesCount: 14}
            ],
            newPostText: '',
        },
        dialogsPage: {
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
                {message: 'Hi'},
                {message: 'Hello World'},
                {message: 'React it`s cool'},
                {message: 'Yo'},
            ],
            newMessageText: '',
        },

    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state)
    }
}

export default store;
