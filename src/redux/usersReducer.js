const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const CHANGE_PAGE = 'CHANGE-PAGE';
const SET_TOTAL_COUNT='SET-TOTAL-COUNT';
const SET_PAGE_LIST='SET-PAGE-LIST';
const SET_IS_LOADING='SET-IS-LOADING'

let initialState = {
    users: [],
    totalUsersCount: 0,
    pageSize: 5,
    currentPage: 1,
    pageList: 1,
    isLoading: false,
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state, users: state.users.map(user => {
                    if (user.id === action.userID)
                        return {...user, followed: true};
                    return user;
                })
            };
        }
        case UNFOLLOW: {
            return  {
                ...state, users: state.users.map(user => {
                    if (user.id === action.userID)
                        return {...user, followed: false};
                    return user;
                })
            };
        }
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case CHANGE_PAGE:{
            return {...state, currentPage: action.page}
        }
        case SET_TOTAL_COUNT:{
            return  {...state, totalUsersCount: action.totalCount}
        }
        case SET_PAGE_LIST:{
            return {...state, pageList: action.pageList}
        }
        case SET_IS_LOADING:{
            return {...state, isLoading: action.isLoading}
        }
        default:
            return state;
    }
};

export const follow = (userID) => {
    return {type: FOLLOW, userID}
};
export const unfollow = (userID) => {
    return {type: UNFOLLOW, userID}
};
export const setUsers = (users) => {
    return {type: SET_USERS, users}
};
export const changePage = (page)=>{
    return {type: CHANGE_PAGE, page}
};
export const setTotalUsersCount = (totalCount)=>{
    return {type: SET_TOTAL_COUNT, totalCount}
};
export const setPageList = (pageList)=>{
    return {type: SET_PAGE_LIST, pageList}
};
export const setIsLoading = (isLoading)=>{
    return {type: SET_IS_LOADING, isLoading}
};

export default usersReducer;