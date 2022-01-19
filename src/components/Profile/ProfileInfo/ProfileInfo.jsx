import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import {OptionalLink} from "../../common/OptionalLink/OptionalLink";
import youTubeIcon from '../../../assets/Image/iconSocialNetwork/youTube.png';
import facebook from '../../../assets/Image/iconSocialNetwork/facebook.png';
import generalPage from '../../../assets/Image/iconSocialNetwork/generalPage.png';
import gitHub from '../../../assets/Image/iconSocialNetwork/gitHub.png';
import contacts from '../../../assets/Image/iconSocialNetwork/contacts.png';
import twitter from '../../../assets/Image/iconSocialNetwork/twitter.png';
import vk from '../../../assets/Image/iconSocialNetwork/vk.png';
import instagram from '../../../assets/Image/iconSocialNetwork/instagram.png';
import ProfileStatus from './ProfileStatus'



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
            <div className={s.userName}>
                {props.profile.fullName}
            </div>
            <div>
                <img src={props.profile.photos.large}/>
                <ProfileStatus status={'Hello world'} />
                <div className={s.info}>
                    <div>
                        About Me: {props.profile.aboutMe}
                    </div>
                    <div className={s.contacts}>
                        Contacts:
                        <OptionalLink s={s.infoDate} link={props.profile.contacts.facebook}
                                      title={<img src={facebook}/>}/>
                        <OptionalLink s={s.infoDate} link={props.profile.contacts.website}
                                      title={<img src={generalPage}/>}/>
                        <OptionalLink s={s.infoDate} link={props.profile.contacts.vk} title={<img src={vk}/>}/>
                        <OptionalLink s={s.infoDate} link={props.profile.contacts.twitter}
                                      title={<img src={twitter}/>}/>
                        <OptionalLink s={s.infoDate} link={props.profile.contacts.instagram}
                                      title={<img src={instagram}/>}/>
                        <OptionalLink s={s.infoDate} link={props.profile.contacts.youtube}
                                      title={<img src={youTubeIcon}/>}/>
                        <OptionalLink s={s.infoDate} link={props.profile.contacts.github} title={<img src={gitHub}/>}/>
                        <OptionalLink s={s.infoDate} link={props.profile.contacts.mainLink}
                                      title={<img src={contacts}/>}/>
                        <div className={s.lookingJob}>
                            <OptionalLink link={props.profile.contacts.lookingForAJob} title='Looking for a job'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo