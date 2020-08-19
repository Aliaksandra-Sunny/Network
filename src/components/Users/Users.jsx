import React from "react";
import style from "./Users.module.css";
import userPhoto from "../../images/user.png";
import {NavLink} from "react-router-dom";

let Users = ({pageSize, totalUsersCount, followingInProgress, pageList, currentPage, onFollowClick, onUnfollowClick, onPageChange, setPageList, users}) => {
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
                            {user.followed === true ? <button disabled={followingInProgress.some(id=>id===user.id)} onClick={() => {
                                    onUnfollowClick(user.id)
                                }}>Unfllow</button> :
                                <button disabled={followingInProgress.some(id=>id===user.id)} onClick={() => {
                                    onFollowClick(user.id)
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