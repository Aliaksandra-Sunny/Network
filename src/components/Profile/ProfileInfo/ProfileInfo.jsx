import React from 'react';
import s from './ProfileInfo.module.css'
import CircularProgress from '@material-ui/core/CircularProgress';

const ProfileInfo =(props) =>{
    if(!props.profile){
     return   <CircularProgress disableShrink/>
    }
    return(
            <div className={s.profileInfo}>
                <div className={s.ava}>
                    <img src={props.profile.photos.large}/>
                </div>
                <div className={s.info }>
                    <h3 className={s.name}>{props.profile.fullName}</h3>
                    <h4>About me:</h4>
                    <p> Статус: {props.profile.lookingForAJobDescription}</p>
                    <p> Статус работы: {props.profile.lookingForAJob}</p>


                </div>
            </div>
    )
}

export default ProfileInfo;