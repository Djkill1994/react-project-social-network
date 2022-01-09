import s from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader/Preloader';
import youTubeIcon from '../../../assets/Image/iconSocialNetwork/youTube.png'
import {OptionalLink} from "../../common/OptionalLink/OptionalLink";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={s.titlePicture}>
                <img
                    src={'https://st.depositphotos.com/1288156/4466/i/600/depositphotos_44660695-stock-photo-himalaya-mountains-black-and-white.jpg'}
                    alt={'no img'}/>
            </div>
            <div>
                {props.profile.fullName}
            </div>
            <div className={s.info}>
                <img src={props.profile.photos.large}/>
                <div>
                    About Me: {props.profile.aboutMe}
                </div>
                <div>
                    Contacts:
                    <div>
                        Facebook: {props.profile.contacts.facebook}
                    </div>
                    <div>
                        Website: {props.profile.contacts.website}
                    </div>
                    <div>
                        VK: {props.profile.contacts.vk}
                    </div>
                    <div>
                        Twitter: {props.profile.contacts.twitter}
                    </div>
                    <div>
                        Instagram: {props.profile.contacts.instagram}
                    </div>
                    <div>
                        <img src={youTubeIcon}/>:
                    </div>
                    <OptionalLink link={props.profile.contacts.github} title='Github'/>
                    <div>
                        MainLink: {props.profile.contacts.mainLink}
                    </div>
                </div>
                <div>
                    Looking For A Job:
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo