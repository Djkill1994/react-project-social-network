import {actions} from "../../../redux/profile-reducer";
import MyPosts, { DispatchPropsTypePosts, MapPropsTypePosts } from "./MyPosts";
import {connect} from "react-redux";
import { AppStateType } from "../../../redux/redux-store";


const mapStateToProps = (state: AppStateType) =>{

    return {
        postsData: state.profilePage.postsData,
    }
};

const MyPostsContainer = connect<MapPropsTypePosts, DispatchPropsTypePosts, {}, AppStateType> (mapStateToProps, {
    addPost: actions.addPostActionCreator
})(MyPosts);

export default MyPostsContainer;




