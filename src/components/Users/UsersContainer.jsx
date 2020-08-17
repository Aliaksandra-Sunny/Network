import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
    changePage,
    follow, setIsLoading,
    setPageList,
    setTotalUsersCount,
    setUsers, toggleFollowingProgress,
    unfollow
} from "../../redux/usersReducer";
import CircularProgress from '@material-ui/core/CircularProgress';
import styled from "styled-components";
import {usersAPI} from "../../api/api";

const UserComponent = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 width: 100%;
 height: 100%;
 `;

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.setIsLoading(true);
        usersAPI.getUsers(this.props.pageSize, this.props.currentPage).then(data => {
            this.props.setTotalUsersCount(data.totalCount);
            this.props.setUsers(data.items);
            this.props.setIsLoading(false);
        });
    }

    onPageChange = (pageNum) => {
        this.props.setIsLoading(true);
        this.props.changePage(pageNum);
        usersAPI.getUsers(this.props.pageSize, this.props.currentPage).then(data => {
            this.props.setUsers(data.items);
            this.props.setIsLoading(false);
        });
    };
    onUnfollowClick = (id) => {
        this.props.toggleFollowingProgress(true, id);
        usersAPI.unfollowUser(id)
            .then(data => {
                if (data.resultCode === 0) {
                    this.props.unfollow(id)
                }
                this.props.toggleFollowingProgress(false, id);
            });
    };
    onFollowClick = (id) => {
        this.props.toggleFollowingProgress(true, id);
        usersAPI.followUser(id)
            .then(data => {
                if (data.resultCode === 0) {
                    this.props.follow(id)
                }
                this.props.toggleFollowingProgress(false, id);
            });
    };

    render() {
        return (
            <UserComponent>
                {this.props.isLoading ? <CircularProgress disableShrink/> :
                    <Users pageSize={this.props.pageSize} totalUsersCount={this.props.totalUsersCount}
                           pageList={this.props.pageList} followingInProgress={this.props.followingInProgress}
                           currentPage={this.props.currentPage}
                           onUnfollowClick={this.onUnfollowClick}
                           onPageChange={this.onPageChange} setPageList={this.props.setPageList}
                           users={this.props.users} onFollowClick={this.onFollowClick}/>}

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

export default connect(mapStateToProps, {
    follow, unfollow,
    setUsers, changePage,
    setTotalUsersCount, setPageList,
    setIsLoading, toggleFollowingProgress
})(UsersContainer);