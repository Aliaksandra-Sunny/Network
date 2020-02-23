import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements = props.posts.map(post => <Post likeCount={post.likeCount} message={post.message}/>)

    return (
        <div className={s.MyPosts}>
            <h4>My posts</h4>
            <div className={s.newPost}>
                <textarea placeholder={"I like jokes and memes:) Please, share with me!"}></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;