import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./Myposts/MyPosts";

const Profile =() =>{

    return(
        <div className={s.content}>
            <div>
                <img className={s.ava} src='https://bigpicture.ru/wp-content/uploads/2019/05/IMG_7276-800x800.jpg'/>
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profile;