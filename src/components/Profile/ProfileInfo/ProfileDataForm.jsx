import s from "./ProfileInfo.module.css";
import {OptionalLink} from "../../common/OptionalLink/OptionalLink";
import facebook from "../../../assets/Image/iconSocialNetwork/facebook.png";
import generalPage from "../../../assets/Image/iconSocialNetwork/generalPage.png";
import vk from "../../../assets/Image/iconSocialNetwork/vk.png";
import twitter from "../../../assets/Image/iconSocialNetwork/twitter.png";
import instagram from "../../../assets/Image/iconSocialNetwork/instagram.png";
import youTubeIcon from "../../../assets/Image/iconSocialNetwork/youTube.png";
import gitHub from "../../../assets/Image/iconSocialNetwork/gitHub.png";
import contacts from "../../../assets/Image/iconSocialNetwork/contacts.png";
import {createField, Input, TextArea} from "../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";
import styles from "../../common/FormsControls/FormControls.module.css";


const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return <form className={s.info} onSubmit={handleSubmit}>

        {error && <div className={styles.formSummaryError}>
            {error}
        </div>}

        {<div>
            <button>save</button>
        </div>}
        <div>
            <b>Full name:</b>{createField("Full Name", "fullName", [], Input)}
        </div>
        <div>
            <b>Looking for a job</b>
            {createField("", "lookingForAJob", [], Input, {type: "checkbox"})}
        </div>
        <div>
            <b>Looking for a job description</b>
            {createField("My professionals skills", "lookingForAJobDescription", [], TextArea)}
        </div>
        <div>
            <b>About Me:</b>
            {createField("About Me", "aboutMe", [], TextArea)}
        </div>
        <div className={s.contacts}>
            <b>Contacts:</b>
            <div>
                <b>Contact</b>: {Object.keys(profile.contacts).map(key => {
                return <div key={key}>
                    <b> {key}: {createField(key, "contacts." + key, [], Input)} </b>
                </div>
            })}
            </div>
        </div>
    </form>
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm