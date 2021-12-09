import s from './MyPosts.module.css';
import Post from "./Posts/Post";


const MyPosts = (props) => {

let postsElements = props.postsData.map(p => <Post message={p.message} likesCount={p.likesCount}/> )
    return (
        <div className={s.posts}>
            <h2>My posts</h2>
            <div>
                <div>
                    <textarea/>
                </div>
                <div>
                    <button>Add Post</button>
                </div>
            </div>
            <div className={s.post}>
                { postsElements }
            </div>
        </div>
    );
}

export default MyPosts