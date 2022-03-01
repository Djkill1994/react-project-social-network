import s from "./ProfileInfo.module.css";
import { createField, GetStringKeys, Input, TextArea } from "../../common/FormsControls/FormsControls";
import { InjectedFormProps, reduxForm } from "redux-form";
import styles from "../../common/FormsControls/FormControls.module.css";
import { ProfileType } from "../../../types/types";
import React from "react";

type PropsType = {
  profile: ProfileType
}

type ProfileTypeKeys = GetStringKeys<ProfileType>

const ProfileDataForm: React.FC<InjectedFormProps<ProfileType,
  PropsType> & PropsType> = ({ handleSubmit, profile, error }) => {
  return <form className={ s.info } onSubmit={ handleSubmit }>

    { error && <div className={ styles.formSummaryError }>
      { error }
    </div> }
    { <div>
      <button>save</button>
    </div> }
    <div>
      <b>Full name:</b>{ createField<ProfileTypeKeys>("Full Name", "fullName", [], Input) }
    </div>
    <div>
      <b>Looking for a job</b>
      { createField<ProfileTypeKeys>("", "lookingForAJob", [], Input, { type: "checkbox" }) }
    </div>
    <div>
      <b>Looking for a job description</b>
      { createField<ProfileTypeKeys>("My professionals skills", "lookingForAJobDescription", [], TextArea) }
    </div>
    <div>
      <b>About Me:</b>
      { createField<ProfileTypeKeys>("About Me", "aboutMe", [], TextArea) }
    </div>
    <div className={ s.contacts }>
      <b>Contacts:</b>
      <div>
        <b>Contact</b>: { Object.keys(profile.contacts).map(key => {
        return <div key={ key }>
          <b> { key }: { createField(key, "contacts." + key, [], Input) } </b>
        </div>
      }) }
      </div>
    </div>
  </form>
}

const ProfileDataFormReduxForm = reduxForm<ProfileType, PropsType>({ form: 'edit-profile' })(ProfileDataForm)

export default ProfileDataFormReduxForm
