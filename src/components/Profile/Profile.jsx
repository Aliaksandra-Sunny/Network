import React from 'react';
import style from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./Myposts/MyPostsContainer";

const Profile =(props) =>{
   return(
        <div>
            <ProfileInfo/>
            <MyPostsContainer store={props.store} />
        </div>
    )
}

export default Profile;