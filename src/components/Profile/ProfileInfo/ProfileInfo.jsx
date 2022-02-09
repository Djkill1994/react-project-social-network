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
import userPhoto from '../../../assets/Image/pngegg.png'
import {useState} from "react";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

    let [editMode, setEditMode] = useState(false)

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData) => {
         saveProfile(formData).then(()=>{
             setEditMode(false)
         })
    }

    return (
        <div>
            <div className={s.titlePicture}>
                <img
                    src={'https://st.depositphotos.com/1288156/4466/i/600/depositphotos_44660695-stock-photo-himalaya-mountains-black-and-white.jpg'}
                    alt={'no img'}/>
            </div>
            <div className={s.infoBlock}>
                <div>
                    <img className={s.avatar} src={profile.photos.large || userPhoto} alt={userPhoto}/>
                    {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}

                    <div className={s.userName}>
                        {profile.fullName}
                    </div>

                    <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>

                    {editMode
                        ? <ProfileDataForm  profile={profile} initialValues={profile} onSubmit={onSubmit}/>
                        : <ProfileData goToEditMode={() => {
                            setEditMode(true)
                        }}
                                       profile={profile} isOwner={isOwner}/>}


                </div>
            </div>
        </div>
    );
};

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return <div className={s.info}>
        {isOwner && <div>
            <button onClick={goToEditMode}>edit</button>
        </div>}
        <div className={s.lookingJob}>
            <b>Looking for a job</b>: {profile.lookingForAJob}
        </div>
        <div className={s.lookingJob}>
            <b>Looking for a job description</b>: {profile.lookingForAJobDescription}
        </div>
        <div>
            <b>About Me:</b> {profile.aboutMe}
        </div>
        <div className={s.contacts}>
            {/*<b>Contacts:</b>*/}
            {/*<OptionalLink s={s.infoDate} link={profile.contacts.facebook}*/}
            {/*              title={<img src={facebook} alt={"no img"}/>}/>*/}
            {/*<OptionalLink s={s.infoDate} link={profile.contacts.website}*/}
            {/*              title={<img src={generalPage} alt={"no img"}/>}/>*/}
            {/*<OptionalLink s={s.infoDate} link={profile.contacts.vk}*/}
            {/*              title={<img src={vk} alt={"no img"}/>}/>*/}
            {/*<OptionalLink s={s.infoDate} link={profile.contacts.twitter}*/}
            {/*              title={<img src={twitter} alt={"no img"}/>}/>*/}
            {/*<OptionalLink s={s.infoDate} link={profile.contacts.instagram}*/}
            {/*              title={<img src={instagram} alt={"no img"}/>}/>*/}
            {/*<OptionalLink s={s.infoDate} link={profile.contacts.youtube}*/}
            {/*              title={<img src={youTubeIcon} alt={"no img"}/>}/>*/}
            {/*<OptionalLink s={s.infoDate} link={profile.contacts.github}*/}
            {/*              title={<img src={gitHub} alt={"no img"}/>}/>*/}
            {/*<OptionalLink s={s.infoDate} link={profile.contacts.mainLink}*/}
            {/*              title={<img src={contacts} alt={"no img"}/>}/>*/}
            {/*Test map contacts*/}
            <div>
                <b>Contact</b>: {Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
            })}
            </div>
        </div>
    </div>
}


//Test component
const Contact = ({contactTitle, contactValue}) => {
    return <div className={s.contact}><b>{contactTitle}</b>: {contactValue}</div>
}

export default ProfileInfo