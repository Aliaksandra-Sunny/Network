import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

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

             friends:
             // store.getState().dialogPage.dialogs,
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
        this._state.profilePage=profileReducer(this._state.profilePage, action);
         this._state.dialogPage=dialogsReducer(this._state.dialogPage, action);
         this._state.sideBar=sidebarReducer(this._state.sideBar, action);
        this._rerenderEntireTree(this._state);

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