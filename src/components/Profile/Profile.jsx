import React from 'react';
import style from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./Myposts/MyPostsContainer";
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";

const Profile = (props) => {
    if(!props.profile){
        return   <CircularProgress disableShrink/>
    }
    return (
        <div>
            <ProfileInfo updateStatus={props.updateStatus} status={props.status} profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
};

export default Profile;