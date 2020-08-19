import {usersAPI} from "../api/api";

const SET_USER_DATA = 'SET-USER-DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state, ...action.userData, isAuth: true};
        default:
            return state;
    }
};

export const setUserData = (userId, email, login) => {
    return {type: SET_USER_DATA, userData: {userId, email, login}}
};
export const authUser = () => {
    return (dispatch) => {
        usersAPI.authMe().then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data;
                dispatch(setUserData(id, email, login));
            }
        });
    }
};
export default authReducer;