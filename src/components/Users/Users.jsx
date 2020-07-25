import React from "react";
import style from "./Users.module.css";
import * as axios from "axios";
import userPhoto from "../../images/user.png"

class Users extends React.Component {

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
    onPrevious = () => {
        this.props.setPageList(this.props.pageList - 1);
    };
    onNext = () => {
        this.props.setPageList(this.props.pageList + 1);
    };


    render() {

        const {pageSize,totalUsersCount, pageList, currentPage} = this.props;
        let pagesCount = Math.ceil(totalUsersCount / pageSize);
        let pages = [];
        for (let i = 20 * pageList - 19; i <= (pagesCount > pageList * 20 ? pageList * 20 : pagesCount); i++) {
            pages.push(i)
        }
        return (
            <div>

                <div>
                    {pageList > 1 && <span onClick={() => {
                        this.onPrevious()
                    }}> {"<-"}</span>}
                    {
                        pages.map(p => {
                            return <span onClick={() => {
                                this.onPageChange(p)
                            }} className={currentPage === p && style.selectedPage}>{p}</span>
                        })
                    }
                    {pageList*20 < pagesCount && <span onClick={() => {
                        this.onNext()
                    }}>-></span>}
                </div>

                {
                    this.props.users.map(user => <div key={user.id}>
                <span>
                    <div>
                        <img src={user.photos.small !== null ? user.photos.small : userPhoto} className={style.photo}/>

                    </div>
                    <div>
                        {user.followed === true ? <button onClick={() => {
                                this.props.unfollow(user.id)
                            }}>Unfllow</button> :
                            <button onClick={() => {
                                this.props.follow(user.id)
                            }}>Follow</button>}

                    </div>
                </span>
                        <span>
                    <span>
                    <div>{user.name}</div><div>{user.status}</div>
                    </span>
                    <span>
                        <div>{"user.location.country"}</div><div>{"user.location.city"}</div>
                    </span>
                </span>
                    </div>)
                }
            </div>
        )
    }
}

export default Users;