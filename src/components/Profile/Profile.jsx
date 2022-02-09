import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo profile={props.profile}
                         isOwner={props.isOwner}
                         status={props.status}
                         saveProfile={props.saveProfile}
                         updateStatus={props.updateStatus}
                         savePhoto={props.savePhoto}/>
            <MyPostsContainer/>
        </div>
    );
}

export default Profile