import React from "react";
import style from "./Users.module.css";
import userPhoto from "../../images/user.png";

let Users = ({pageSize,totalUsersCount, pageList, currentPage, follow, unfollow, onPageChange, setPageList, users}) => {
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
        <div>
            <div>
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
                users.map(user => <div key={user.id}>
                <span>
                    <div>
                        <img src={user.photos.small !== null ? user.photos.small : userPhoto} className={style.photo}/>

                    </div>
                    <div>
                        {user.followed === true ? <button onClick={() => {
                                unfollow(user.id)
                            }}>Unfllow</button> :
                            <button onClick={() => {
                                follow(user.id)
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
};

export default Users;