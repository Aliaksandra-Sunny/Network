import React from 'react';
import style from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postsElements = props.posts.map(post => <Post likeCount={post.likeCount} message={post.message}/>);

    let onAddPost = () => {
        props.addPost();
    };

    let onPostChange = (e) => {
        let text = e.currentTarget.value;
        props.updateNewPostText(text);
    };

    return (
        <div className={style.MyPosts}>
            <h4>My posts</h4>
            <div className={style.newPost}>
                <textarea onChange={onPostChange} value={props.newPostText}
                          placeholder={"I like jokes and memes:) Please, share with me!"}/>
                <button onClick={onAddPost}>Add post</button>
            </div>
            <div className={style.posts}>
                {postsElements}
            </div>
        </div>
    )
};

export default MyPosts;