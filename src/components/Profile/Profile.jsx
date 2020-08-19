import React from 'react';
import style from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./Myposts/MyPostsContainer";
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";
import {Redirect} from "react-router-dom";

const Profile = (props) => {
    if(!props.isAuth) return <Redirect to={"/login"}/>
    if(!props.profile){
        return   <CircularProgress disableShrink/>
    }


    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
};

export default Profile;