import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo =() =>{
    return(
            <div className={s.profileInfo}>
                <div className={s.ava}>
                    <img src='https://bigpicture.ru/wp-content/uploads/2019/05/IMG_7276-800x800.jpg'/>
                </div>
                <div className={s.info }>
                    <h3>About me:</h3>
                    <p> I'm a very beautiful and funny parrot!<br/> My name is Miay:)<br/>Let's talk about great films and delicious grains!</p>

                </div>
            </div>
    )
}

export default ProfileInfo;