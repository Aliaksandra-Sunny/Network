import React from "react";
import s from './Friend.module.css'


const Friend = (props) => {
    return (
        <div className={s.friend}>
            {props.name}
            <img src="https://avatars.mds.yandex.net/get-pdb/1604805/2cf986d5-97ae-479b-83ab-2f34731c1515/s1200"/>
        </div>
    )
}

export default Friend;