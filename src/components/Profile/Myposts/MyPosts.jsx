import React from 'react';
import style from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = ({newPostText, posts, addPost, updateNewPostText}) => {
    let postsElements = posts.map(post => <Post key={post.id} likeCount={post.likeCount} message={post.message}/>);

    let onAddPost = () => {
        addPost();
    };

    let onPostChange = (e) => {
        let text = e.currentTarget.value;
        updateNewPostText(text);
    };

    return (
        <div className={style.MyPosts}>
            <h4>My posts</h4>
            <div className={style.newPost}>
                <textarea onChange={onPostChange} value={newPostText}
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