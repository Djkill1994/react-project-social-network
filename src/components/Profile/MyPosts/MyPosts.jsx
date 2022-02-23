import s from './MyPosts.module.css';
import Post from "./Posts/Post";
import React from "react";
import {Field, reduxForm} from "redux-form";
import {TextArea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";

const maxLength10 = maxLengthCreator(10)

const AddPostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <div>
                <Field placeholder={'Enter Your Text'} name={'newPostText'} component={TextArea}
                validate={[required, maxLength10]}/>
            </div>
            <div>
                <button>Add Post</button>
            </div>
        </div>
    </form>
}

const AddNewPostReduxForm = reduxForm({form: 'ProfileAddNewPostRedux'})(AddPostForm);

const MyPosts = React.memo(props => {
    let postsElements = props.postsData.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    // let newPostElement = React.createRef();

    let OnAddPost = (values) => {
        props.addPost(values.newPostText);
    };

    return (
        <div className={s.posts}>
            <h2>My posts</h2>
            <AddNewPostReduxForm onSubmit={OnAddPost}/>
            <div className={s.post}>
                {postsElements}
            </div>
        </div>
    );
});

export default MyPosts