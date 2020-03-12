import React from 'react';
import style from './Profile.module.css'
import MyPosts from "./Myposts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile =(props) =>{
   return(
        <div>
            <ProfileInfo/>
            <MyPosts dispatch={props.dispatch} newPostText={props.profilePage.newPostText} posts={props.profilePage.posts}/>
        </div>
    )
}

export default Profile;