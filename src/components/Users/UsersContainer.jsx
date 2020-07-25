import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
    changePageAC,
    followAC,
    setPageListAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC
} from "../../redux/usersReducer";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageList: state.usersPage.pageList,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => dispatch(followAC(userID)),
        unfollow: (userID) => dispatch(unfollowAC(userID)),
        setUsers:(users)=>dispatch(setUsersAC(users)),
        changePage:(page)=>dispatch(changePageAC(page)),
        setTotalUsersCount:(totalCount)=>dispatch(setTotalUsersCountAC(totalCount)),
        setPageList: (pageList)=>dispatch(setPageListAC(pageList))
    }
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;