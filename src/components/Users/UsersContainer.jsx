import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import * as axios from "axios"
import {
    changePage,
    follow, setIsLoading,
    setPageList,
    setTotalUsersCount,
    setUsers,
    unfollow
} from "../../redux/usersReducer";
import CircularProgress from '@material-ui/core/CircularProgress';
//
// const userComponent = styled.div``

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.setIsLoading(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then(response => {
                this.props.setTotalUsersCount(response.data.totalCount);
                this.props.setUsers(response.data.items);
                this.props.setIsLoading(false);
            });
    }

    onPageChange = (pageNum) => {
        this.props.setIsLoading(true);
        this.props.changePage(pageNum);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNum}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setIsLoading(false);
            });
    };

    render() {
        return (
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%"
            }}>
                {this.props.isLoading ? <CircularProgress disableShrink/> :
                    <Users pageSize={this.props.pageSize} totalUsersCount={this.props.totalUsersCount}
                           pageList={this.props.pageList}
                           currentPage={this.props.currentPage} follow={this.props.follow}
                           unfollow={this.props.unfollow}
                           onPageChange={this.onPageChange} setPageList={this.props.setPageList}
                           users={this.props.users}/>}

            </div>
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
    }
};

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    changePage,
    setTotalUsersCount,
    setPageList,
    setIsLoading
})(UsersContainer);