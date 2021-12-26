import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


const mapStateToProps = (state) =>{

    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
        dispatch(addPostActionCreator());
    },
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);
        }
    }
};

const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;




