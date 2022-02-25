import {ResultCodeForCaptchaEnum, ResultCodesEnum} from "../api/api";
import {stopSubmit} from "redux-form";
import { authAPI } from "../api/auth-api";
import { securityAPI } from "../api/security-api";


const SET_USER_DATA = 'react-project-social-network/auth/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'react-project-social-network/auth/GET_CAPTCHA_URL_SUCCESS';


// export type InitialStateType = {
//     userId: number | null
//     login: string | null
//     email: string | null
//     isAuth: boolean
//     captchaUrl: string | null
// }

let initialState = {
    userId: null as number | null,
    login: null as string | null,
    email: null as string | null,
    isAuth: false,
    captchaUrl: null  as string | null,
};

export type InitialStateType = typeof initialState;

const authReducer = (state = initialState, action: any):InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state;
    }
}

type GetCaptchaUrlSuccessActionType = {
    type: typeof GET_CAPTCHA_URL_SUCCESS,
    payload: {captchaUrl:string}
}

type SetAuthUserDataActionPayloadType = {
    userId: number | null
    login: string | null
    email: string | null
    isAuth: boolean
}
type SetAuthUserDataActionType = {
    type: typeof SET_USER_DATA
    payload: SetAuthUserDataActionPayloadType
}

export const getCaptchaUrlSuccess = (captchaUrl:string): GetCaptchaUrlSuccessActionType => ({
    type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}
});

export const setAuthUserData = (userId: number | null, login: string | null, email: string | null, isAuth: boolean):SetAuthUserDataActionType => ({
    type: SET_USER_DATA,
    payload: {userId, login, email, isAuth}
});
//types
export const getAuthUserData = () => async (dispatch:any) => {
    const meData = await authAPI.me();

    if (meData.resultCode === ResultCodesEnum.Success) {
        let {id, login, email} = meData.data;
        dispatch(setAuthUserData(id, login, email, true));
    }
}

export const login = (email:string, password: string, rememberMe: boolean, captcha: string) => async (dispatch: any) => {
    const data = await authAPI.login(email, password, rememberMe, captcha);

    if (data.resultCode === ResultCodesEnum.Success) {
        dispatch(getAuthUserData())
    } else {
        if (data.resultCode === ResultCodeForCaptchaEnum.CaptchaIsRequired) {
            dispatch(getCaptchaUrl());
        }
        let message = data.messages.length > 0 ? data.messages[0] : "Some error";
        dispatch(stopSubmit("login", {_error: message}));
    }
}

export const getCaptchaUrl = () => async (dispatch: any) => {
    const data = await securityAPI.getCaptchaUrl();
    const captchaUrl = data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl));
}

export const logout = () => async (dispatch: any) => {
    const response = await authAPI.logout();

    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

export default authReducer
