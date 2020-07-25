import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import * as axios from "axios"
import {
    changePageAC,
    followAC,
    setPageListAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC
} from "../../redux/usersReducer";



class UsersContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then(response => {
                this.props.setTotalUsersCount(response.data.totalCount)
                this.props.setUsers(response.data.items);

            });
    }

    onPageChange = (pageNum) => {
        this.props.changePage(pageNum);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNum}`)
            .then(response => this.props.setUsers(response.data.items));
    };

    render() {

        return <Users pageSize={this.props.pageSize} totalUsersCount={this.props.totalUsersCount}
                      pageList={this.props.pageList}
                      currentPage={this.props.currentPage} follow={this.props.follow} unfollow={this.props.unfollow}
                      onPageChange={this.onPageChange} setPageList={this.props.setPageList} users={this.props.users}/>
    }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);