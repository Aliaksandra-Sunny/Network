import {usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_PROFILE = "SET-PROFILE";

let initialState = {
    posts: [
        {id: 1, message: "Hi, my name is Sasha", likeCount: 10},
        {id: 2, message: "Hello, Sasha! I'm Tolya", likeCount: 11}
    ],
    newPostText: "",
    profile: null
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
        case SET_PROFILE:{
            return {...state, profile: action.profile}
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
export const setProfileAC = (profile) => {
    return {type: SET_PROFILE, profile}
};
export const setProfile=(userId)=>{
    return (dispatch)=>{
        usersAPI.getProfile(userId).then(data => {
            dispatch(setProfileAC(data));
        });
    }
};


export default profileReducer;