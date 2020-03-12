import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements = props.posts.map(post => <Post likeCount={post.likeCount} message={post.message}/>);

    let addPost = () => {
        props.dispatch({type: 'ADD-POST'});
    };

    let onPostChange = (e) => {
        debugger
        let text = e.currentTarget.value;
        props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text});
    };

    return (
        <div className={s.MyPosts}>
            <h4>My posts</h4>
            <div className={s.newPost}>
                <textarea onChange={onPostChange} value={props.newPostText}
                          placeholder={"I like jokes and memes:) Please, share with me!"}/>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
};

export default MyPosts;