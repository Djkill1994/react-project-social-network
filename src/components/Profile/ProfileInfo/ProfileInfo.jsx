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
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus}) => {
    if (!profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={s.titlePicture}>
                <img
                    src={'https://st.depositphotos.com/1288156/4466/i/600/depositphotos_44660695-stock-photo-himalaya-mountains-black-and-white.jpg'}
                    alt={'no img'}/>
            </div>
            <div className={s.infoBlock}>
                <div className={s.userName}>
                    {profile.fullName}
                </div>
                <div>
                    <img className={s.avatar} src={profile.photos.large} alt={'no img'}/>
                    <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                    <div className={s.info}>
                        <div>
                            About Me: {profile.aboutMe}
                        </div>
                        <div className={s.contacts}>
                            Contacts:
                            <OptionalLink s={s.infoDate} link={profile.contacts.facebook}
                                          title={<img src={facebook} alt={"no img"} />}/>
                            <OptionalLink s={s.infoDate} link={profile.contacts.website}
                                          title={<img src={generalPage} alt={"no img"}/>}/>
                            <OptionalLink s={s.infoDate} link={profile.contacts.vk} title={<img src={vk} alt={"no img"}/>}/>
                            <OptionalLink s={s.infoDate} link={profile.contacts.twitter}
                                          title={<img src={twitter} alt={"no img"}/>}/>
                            <OptionalLink s={s.infoDate} link={profile.contacts.instagram}
                                          title={<img src={instagram} alt={"no img"}/>}/>
                            <OptionalLink s={s.infoDate} link={profile.contacts.youtube}
                                          title={<img src={youTubeIcon} alt={"no img"}/>}/>
                            <OptionalLink s={s.infoDate} link={profile.contacts.github}
                                          title={<img src={gitHub} alt={"no img"}/>}/>
                            <OptionalLink s={s.infoDate} link={profile.contacts.mainLink}
                                          title={<img src={contacts} alt={"no img"}/>}/>
                            <div className={s.lookingJob}>
                                <OptionalLink link={profile.contacts.lookingForAJob} title='Looking for a job'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo