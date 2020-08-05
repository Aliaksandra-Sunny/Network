import React from "react";
import style from "./Users.module.css";
import userPhoto from "../../images/user.png";
import {NavLink} from "react-router-dom";
import * as axios from "axios";

let Users = ({pageSize, totalUsersCount, pageList, currentPage, follow, unfollow, onPageChange, setPageList, users}) => {
    let onPrevious = () => {
        setPageList(pageList - 1);
    };
    let onNext = () => {
        setPageList(pageList + 1);
    };

    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 20 * pageList - 19; i <= (pagesCount > pageList * 20 ? pageList * 20 : pagesCount); i++) {
        pages.push(i)
    }
    return (
        <div className={style.users}>
            <div className={style.pages}>
                {pageList > 1 && <span onClick={() => {
                    onPrevious()
                }}> {"<-"}</span>}
                {
                    pages.map(p => {
                        return <span onClick={() => {
                            onPageChange(p)
                        }} className={currentPage === p && style.selectedPage}>{p}</span>
                    })
                }
                {pageList * 20 < pagesCount && <span onClick={() => {
                    onNext()
                }}>-></span>}
            </div>

            {
                users.map(user => <div className={style.user} key={user.id}>
                    <div className={style.ava}>
                        <div>
                            <NavLink to={"/profile/" + user.id}>
                                <img src={user.photos.small !== null ? user.photos.small : userPhoto}
                                     className={style.photo}/>
                            </NavLink>
                        </div>
                        <div>
                            {user.followed === true ? <button onClick={() => {
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                                        withCredentials: true,
                                        headers:{"API-KEY": "ed9ff87e-25ab-4b75-a8a6-d22424d524be"}
                                    })
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                unfollow(user.id)
                                            }
                                        });
                                }}>Unfllow</button> :
                                <button onClick={() => {
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                                        withCredentials: true,
                                        headers:{"API-KEY": "ed9ff87e-25ab-4b75-a8a6-d22424d524be"}
                                    })
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                follow(user.id)
                                            }
                                        });
                                }}>Follow</button>}
                        </div>
                    </div>
                    <div className={style.info}>
                        <span>Name: {user.name}</span>
                        <span>{user.status}</span>
                    </div>
                </div>)
            }
        </div>
    )
};

export default Users;