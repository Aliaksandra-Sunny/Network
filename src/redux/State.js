const ADD_POST='ADD-POST';
const UPDATE_NEW_POST_TEXT='UPDATE-NEW-POST-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {
    _state: {
        dialogPage: {
            dialogs: [
                {id: 1, name: 'Tolya'},
                {id: 2, name: 'Tanya'},
                {id: 3, name: 'Nastya'},
                {id: 4, name: 'Lena'},
                {id: 5, name: 'Sasha'},
            ],
            messages: [
                {id: 1, message: 'Hi!', user: 1},
                {id: 2, message: 'Hello. Nice to see you!', user: 0},
                {id: 3, message: 'You make me smile:)', user: 1},
                {id: 4, message: 'It is pleasure for me!', user: 0},
            ],
            newMessageText: "",
        },

        profilePage: {
            posts: [
                {id: 1, message: "Hi, my name is Sasha", likeCount: 10},
                {id: 2, message: "Hello, Sasha! I'm Tolya", likeCount: 11}
            ],
            newPostText: "",
        },

        sideBar: {
            friends: // state.dialogPage.dialogs,
                [
                    {id: 1, name: 'Tolya'},
                    {id: 2, name: 'Tanya'},
                    {id: 3, name: 'Nastya'},
                ],
        },
    },
    _rerenderEntireTree() {
        console.log("State was changed")
    },

    subscribe(observer) {
        this._rerenderEntireTree = observer;
    },
    getState() {
        return this._state;
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 3,
                message: this._state.profilePage.newPostText,
                likeCount: 0,
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = "";
            this._rerenderEntireTree(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._rerenderEntireTree(this._state);
        } else if (action.type === 'SEND-MESSAGE') {
            let newMessage = {
                id: 1,
                message: this._state.dialogPage.newMessageText,
                user: 0,
            };
            this._state.dialogPage.messages.push(newMessage);
            this._state.dialogPage.newMessageText = "";
            this._rerenderEntireTree(this._state);
        } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.dialogPage.newMessageText = action.newText;
            this._rerenderEntireTree(this._state);
        }
    },
};

export const addPostActionCreator=()=>{
    return {type: ADD_POST}
};
export const updateNewPostTextActionCreator=(text)=>{
    return {type: UPDATE_NEW_POST_TEXT, newText: text}
};
export const sendMessageActionCreator=()=>{
    return {type: SEND_MESSAGE}
};
export const updateNewMessageTextActionCreator=(text)=>{
    return {type: UPDATE_NEW_MESSAGE_TEXT, newText: text}
};
export default store;