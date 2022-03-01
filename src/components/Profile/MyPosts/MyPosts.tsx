import s from './MyPosts.module.css';
import Post from "./Posts/Post";
import React from "react";
import { InjectedFormProps, reduxForm } from "redux-form";
import { createField, GetStringKeys, TextArea } from "../../common/FormsControls/FormsControls";
import { maxLengthCreator, required } from "../../../utils/validators/validators";
import { PostType } from "../../../types/types";


const maxLength10 = maxLengthCreator(10)

type PropsTypePostForm = {}

type PropsTypePosts = {
  postsData: Array<PostType>
  addPost: (newPostText: string) => void
}
export type AddPostValuesType = {
  newPostText: string
}

export type AddPostFormValuesType = GetStringKeys<AddPostValuesType>

const AddPostForm: React.FC<InjectedFormProps<AddPostValuesType,
  PropsTypePostForm> & PropsTypePostForm> = (props) => {
  return <form onSubmit={ props.handleSubmit }>
    <div>
      <div>
        { createField<AddPostFormValuesType>('Enter Your Text', "newPostText", [required, maxLength10], TextArea) }
      </div>
      <div>
        <button>Add Post</button>
      </div>
    </div>
  </form>
}

const AddNewPostReduxForm = reduxForm<AddPostValuesType, PropsTypePostForm>({ form: 'ProfileAddNewPostRedux' })(AddPostForm);

const MyPosts: React.FC<PropsTypePosts> = props => {
  let postsElements = props.postsData.map(p => <Post key={ p.id } message={ p.message } likesCount={ p.likesCount }/>);

  let OnAddPost = (values: AddPostValuesType) => {
    props.addPost(values.newPostText);
  };
  return (
    <div className={ s.posts }>
      <h2>My posts</h2>
      <AddNewPostReduxForm onSubmit={ OnAddPost }/>
      <div className={ s.post }>
        { postsElements }
      </div>
    </div>
  );
}

const MyPostsMemorized = React.memo(MyPosts)

export default MyPostsMemorized
