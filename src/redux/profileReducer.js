const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message: "Hi, my name is Sasha", likeCount: 10},
        {id: 2, message: "Hello, Sasha! I'm Tolya", likeCount: 11}
    ],
    newPostText: "",
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 3,
                message: state.newPostText,
                likeCount: 0,
            };
            return {...state, newPostText: "", posts: [...state.posts, newPost]};
        }
        case UPDATE_NEW_POST_TEXT:{
            return {...state, newPostText: action.newText};
        }
        default:
            return state;
    }
};

export const addPostActionCreator = () => {
    return {type: ADD_POST}
};
export const updateNewPostTextActionCreator = (text) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: text}
};

export default profileReducer;