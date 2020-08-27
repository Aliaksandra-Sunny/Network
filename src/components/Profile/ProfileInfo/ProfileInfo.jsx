import React from 'react';
import s from './ProfileInfo.module.css'
import userPhoto from "../../../images/user.png";
import ProfileStatus from "./ProfileStatus.jsx"

const ProfileInfo =(props) =>{
    return(
            <div className={s.profileInfo}>
                <div className={s.ava}>
                    <img src={props.profile.photos.large!== null ?props.profile.photos.large : userPhoto}/>
                </div>
                <div className={s.info }>
                    <ProfileStatus updateStatus={props.updateStatus} status={props.status}/>
                    <h3 className={s.name}>{props.profile.fullName}</h3>
                    <h4>About me:</h4>
                    <p>{props.profile.aboutMe}</p>
                    <p> Статус: {props.profile.lookingForAJobDescription || "-"}</p>
                    <p> Статус работы: {props.profile.lookingForAJob? "в поиске": "уже работаю"}</p>
                </div>
            </div>
    )
};

export default ProfileInfo;