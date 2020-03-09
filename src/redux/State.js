let renderEntireTree = () => {
    console.log("State was changed")
}
let state = {
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
        ]
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
}

export const addPost = () => {
    let newPost = {
        id: 3,
        message: state.profilePage.newPostText,
        likeCount: 0,
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = "";
    renderEntireTree(state);
};

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    renderEntireTree(state);
};

export const subscribe = (observer) => {
    renderEntireTree = observer;
}
export default state;