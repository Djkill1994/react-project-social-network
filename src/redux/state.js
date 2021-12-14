import {renderEntireTree} from "../render";


let state = {
    profilePage: {
        postsData: [
            {id: 1, message: 'Hi, how are you?', likesCount: 3},
            {id: 2, message: 'It\'s my first post', likesCount: 14}
        ],
        newPostText: 'Adding Texts',
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
        newMessageText: 'Adding Texts',
    },

};
export let addPost = () => {
    let newPost = {
        id: 3,
        message: state.profilePage.newPostText,
        likesCount: 0,
    };
    state.profilePage.postsData.push(newPost);
    state.profilePage.newPostText = '';
    renderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText
    renderEntireTree(state);
}

export let addMessage = () => {
    let newMessage = {
        message: state.dialogsPage.newMessageText,
    };
    state.dialogsPage.messageData.push(newMessage);
    state.dialogsPage.newMessageText = '';
    renderEntireTree(state);
}

export let updateNewMessageText = (newText) => {
    state.dialogsPage.newMessageText = newText;
    renderEntireTree(state);
}

export default state;