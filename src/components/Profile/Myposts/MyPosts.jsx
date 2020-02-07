import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts =() =>{

    return(
            <div className={s.MyPosts}>
                My posts
                <div>
                    <textarea></textarea>
                    <button>Add post</button>
                </div>
                <div className={s.posts}>
                    <Post like_count="10" message="Hi, my name is Sasha"/>
                    <Post like_count="9" message="Hello, Sasha! I'm Tolya"/>
                </div>
            </div>
    )
}

export default MyPosts;