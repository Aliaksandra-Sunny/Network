import React from 'react';
import s from './Profile.module.css'

const Profile =() =>{

    return(
        <div className={s.content}>
            <div>
                <img className={s.ava} src='https://bigpicture.ru/wp-content/uploads/2019/05/IMG_7276-800x800.jpg'/>
            </div>
            <div>
                My post
                <div>
                    New post
                </div>
                <div className={s.posts}>
                    <div className={s.item}>post 1</div>
                    <div className={s.item}>post 2</div>
                </div>
            </div>
        </div>
    )
}

export default Profile;