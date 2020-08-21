import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
    follow, getUsers, setPageList,
    unfollow
} from "../../redux/usersReducer";
import CircularProgress from '@material-ui/core/CircularProgress';
import styled from "styled-components";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

const UserComponent = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 width: 100%;
 height: 100%;
 `;

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.pageSize, this.props.currentPage)
    }

    onPageChange = (pageNum) => {
        this.props.getUsers(this.props.pageSize, pageNum)
    };
    onUnfollowClick = (id) => {
        this.props.unfollow(id);
    };
    onFollowClick = (id) => {
       this.props.follow(id);
    };

    render() {
        return (
            <UserComponent>
                {this.props.isLoading ? <CircularProgress disableShrink/> :
                    <Users pageSize={this.props.pageSize} totalUsersCount={this.props.totalUsersCount}
                           pageList={this.props.pageList} followingInProgress={this.props.followingInProgress}
                           currentPage={this.props.currentPage}
                           onUnfollowClick={this.onUnfollowClick} onFollowClick={this.onFollowClick}
                           onPageChange={this.onPageChange} setPageList={this.props.setPageList}
                           users={this.props.users}/>}

            </UserComponent>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageList: state.usersPage.pageList,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isLoading: state.usersPage.isLoading,
        followingInProgress: state.usersPage.followingInProgress
    }
};

export default  withAuthRedirect(connect(mapStateToProps, {
    follow, unfollow, setPageList, getUsers,
})(UsersContainer));