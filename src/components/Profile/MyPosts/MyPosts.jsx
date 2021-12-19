import s from './MyPosts.module.css';
import Post from "./Posts/Post";
import React from "react";

const MyPosts = (props) => {

    let postsElements = props.postsData.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef();

    let OnAddPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };

    return (
        <div className={s.posts}>
            <h2>My posts</h2>
            <div>
                <div>
                    <textarea onChange={onPostChange}
                              value={props.newPostText}
                              placeholder={'Enter Your Message'}/>
                </div>
                <div>
                    <button onClick={OnAddPost}>Add Post</button>
                </div>
            </div>
            <div className={s.post}>
                {postsElements}
            </div>
        </div>
    );
}
export default MyPosts