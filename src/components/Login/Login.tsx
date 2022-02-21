import { InjectedFormProps, reduxForm } from "redux-form";
import { createField, Input, LoginFormValuesType } from "../common/FormsControls/FormsControls";
import { required } from "../../utils/validators/validators";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";
import { Redirect } from "react-router-dom";
import styles from "./../common/FormsControls/FormControls.module.css"
import { AppStateType } from "../../redux/redux-store";
import React from "react";

type LoginFormOwnProps = {
  captchaUrl: string | null
}

const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType,
  LoginFormOwnProps> & LoginFormOwnProps> = ({ handleSubmit,
                                                                  error, captchaUrl }) => {
  return <form onSubmit={ handleSubmit }>
    { createField('Email', 'email', [required], Input) }
    { createField('Password', 'password', [required], Input, { type: 'password' }) }
    { createField(undefined, 'rememberMe', [], Input, { type: 'checkbox' }, "remember me") }

    { captchaUrl && <img src={ captchaUrl } alt={ "no img" }/> }
    { captchaUrl && createField('Symbols from image', 'captcha', [required], Input) }

    { error && <div className={ styles.formSummaryError }>
      { error }
    </div> }
    <div>
      <button>logIn</button>
    </div>
  </form>
}

const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({ form: 'login' })(LoginForm);

type MapStatePropsType = {
  captchaUrl: string | null
  isAuth: boolean
}

type MapDispatchPropsType = {
  login: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}

const Login: React.FC<MapStatePropsType & MapDispatchPropsType> = (props) => {
  const onSubmit = (formData: LoginFormValuesType) => {
    props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
  }
  if (props.isAuth) {
    return <Redirect to={ '/profile' }/>
  }

  return <div>
    <h1>LOGIN</h1>
    <LoginReduxForm onSubmit={ onSubmit } captchaUrl={ props.captchaUrl }/>
  </div>
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
  captchaUrl: state.auth.captchaUrl,
  isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, { login })(Login)
