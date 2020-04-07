const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        {
            id: 1,
            followed: false,
            fullName: "Alexandra",
            status: "I'm a student",
            location: {country: "Belarus", city: "Minsk"}
        },
        {
            id: 2,
            followed: true,
            fullName: "Tatiana",
            status: "I'm a starosta",
            location: {country: "France", city: "Paris"}
        },
        {
            id: 3,
            followed: true,
            fullName: "Anastasia",
            status: "I'm a student and a starosta",
            location: {country: "USA", city: "NY"}
        },
    ],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            let stateCopy = {
                ...state, users: state.users.map(user => {
                    if (user.id === action.userID)
                        return {...user, followed: true};
                    return user;
                })
            }
        }
        case UNFOLLOW: {
            let stateCopy = {
                ...state, users: state.users.map(user => {
                    if (user.id === action.userID)
                        return {...user, followed: false};
                    return user;
                }  )
            }
        }
        case SET_USERS:{
            return {...state, users: action.users}
        }


        default:
            return state;
    }
};

export const followAC = (userID) => {
    return {type: FOLLOW, userID}
};
export const unfollowAC = (userID) => {
    return {type: UNFOLLOW, userID}
};
export const setUsersAC = (users) => {
    return {type: SET_USERS, users}
};


export default usersReducer;