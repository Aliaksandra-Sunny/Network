import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts =() =>{
    let postData=[
        {id: 1, message:"Hi, my name is Sasha", likeCount: 10},
        {id: 2, message:"Hello, Sasha! I'm Tolya", likeCount: 11}
    ]


    return(
            <div className={s.MyPosts}>
                <h4>My posts</h4>
                <div>
                    <textarea placeholder={"I like jokes and memes:) Please, share with me!"}></textarea>
                    <button>Add post</button>
                </div>
                <div className={s.posts}>
                    <Post likeCount={postData[0].likeCount} message={postData[0].message}/>
                    <Post likeCount={postData[1].likeCount} message={postData[1].message}/>
                </div>
            </div>
    )
}

export default MyPosts;