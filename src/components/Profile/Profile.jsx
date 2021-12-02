import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img
                    src={'https://st.depositphotos.com/1288156/4466/i/600/depositphotos_44660695-stock-photo-himalaya-mountains-black-and-white.jpg'}
                    alt={'no img'}/>
            </div>
            <div>
                avatar + description
            </div>
            <MyPosts/>
        </div>
    );
}

export default Profile