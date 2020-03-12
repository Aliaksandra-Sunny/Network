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

    getState() {
        return this._state;
    },

    _rerenderEntireTree() {
        console.log("State was changed")
    },

    addMessage() {
        let newMessage = {
            id: 1,
            message: this._state.dialogPage.newMessageText,
            user: 0,
        };
        this._state.dialogPage.messages.push(newMessage);
        this._state.dialogPage.newMessageText = "";
        this._rerenderEntireTree(this._state);
    },

    updateNewMessageText(newText) {
        this._state.dialogPage.newMessageText = newText;
        this._rerenderEntireTree(this._state);
    },


    addPost() {
        let newPost = {
            id: 3,
            message: this._state.profilePage.newPostText,
            likeCount: 0,
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = "";
        this._rerenderEntireTree(this._state);
    },

    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._rerenderEntireTree(this._state);
    },

    subscribe(observer) {
        this._rerenderEntireTree = observer;
    },
};

export default store;