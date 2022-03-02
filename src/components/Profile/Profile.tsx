import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import React from "react";
import { ProfileType } from "../../types/types";

type PropsType = {
  profile: ProfileType | null
  status: string
  updateStatus: (status: string) => void
  isOwner: boolean
  savePhoto: (file: File) => void
  saveProfile: (profile: ProfileType) => Promise<any>
}

const Profile: React.FC<PropsType> = (props) => {

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
