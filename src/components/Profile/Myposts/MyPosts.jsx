import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postRef = React.createRef();
    let postsElements = props.posts.map(post => <Post likeCount={post.likeCount} message={post.message}/>);

    let addPost = () => {
        props.addPost();
    };

    let onPostChange=()=>{
        let text = postRef.current.value;
        props.updateNewPostText(text);
    };

    return (
        <div className={s.MyPosts}>
            <h4>My posts</h4>
            <div className={s.newPost}>
                <textarea onChange={onPostChange} value={props.newPostText} ref={postRef} placeholder={"I like jokes and memes:) Please, share with me!"}/>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
};

export default MyPosts;