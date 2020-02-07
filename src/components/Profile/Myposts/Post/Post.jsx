import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://avatars.mds.yandex.net/get-pdb/1604805/2cf986d5-97ae-479b-83ab-2f34731c1515/s1200"/>
            {props.message}
            <div>
                <span>like</span>
                 {props.like_count}
            </div>
        </div>
    )
}

export default Post;