import React from "react";
import style from "./Users.module.css";

const Users = (props) => {
    if(props.users.length===0)
    props.setUsers( [
        {
            id: 1,
            followed: false,
            photoUrl: "https://i.pinimg.com/474x/d6/e6/28/d6e6281bb90621d9be0a9e53d882c2c6.jpg",
            fullName: "Alexandra",
            status: "I'm a student",
            location: {country: "Belarus", city: "Minsk"}
        },
        {
            id: 2,
            followed: true,
            photoUrl: "https://wompampsupport.azureedge.net/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.kym-cdn.com%2Fentries%2Ficons%2Ffacebook%2F000%2F027%2F916%2Fhamster.jpg",
            fullName: "Tatiana",
            status: "I'm a starosta",
            location: {country: "France", city: "Paris"}
        },
        {
            id: 3,
            followed: true,
            photoUrl: "https://www.meme-arsenal.com/memes/9ccc20632cfe53287a78ccbd34788e12.jpg",
            fullName: "Anastasia",
            status: "I'm a student and a starosta",
            location: {country: "USA", city: "NY"}
        },
    ]);

    return (
        <div>{
            props.users.map(user => <div key={user.id}>
                <span>
                    <div>
                        <img src={user.photoUrl} className={style.photo}/>
                        
                    </div>
                    <div>
                        {user.followed===true ? <button onClick={()=>{props.unfollow(user.id)}}>Unfllow</button> :
                            <button onClick={()=>{props.follow(user.id)}}>Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                    <div>{user.fullName}</div><div>{user.status}</div>
                    </span>
                    <span>
                        <div>{user.location.country}</div><div>{user.location.city}</div>
                    </span>
                </span>
            </div>)
        }
        </div>
    )

};

export default Users;