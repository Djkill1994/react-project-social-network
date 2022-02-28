import {ResultCodeForCaptchaEnum, ResultCodesEnum} from "../api/api";
import { FormAction, stopSubmit } from "redux-form";
import { authAPI } from "../api/auth-api";
import { securityAPI } from "../api/security-api";
import { BaseThunkType, InferActionsTypes } from "./redux-store";
import { Action } from "redux";

let initialState = {
    userId: null as number | null,
    login: null as string | null,
    email: null as string | null,
    isAuth: false,
    captchaUrl: null  as string | null,
};

export type InitialStateType = typeof initialState;

type ActionsType = InferActionsTypes<typeof actions>

type ThunkType = BaseThunkType<ActionsType | FormAction>

const authReducer = (state = initialState, action: ActionsType):InitialStateType => {
    switch (action.type) {
        case 'SET_USER_DATA':
        case 'GET_CAPTCHA_URL_SUCCESS':
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state;
    }
}

export const actions = {
    setAuthUserData: (userId: number | null, login: string | null, email: string | null, isAuth: boolean) => ({
        type: 'SET_USER_DATA',
        payload: {userId, login, email, isAuth}
    } as const),
    getCaptchaUrlSuccess: (captchaUrl:string) => ({
        type: 'GET_CAPTCHA_URL_SUCCESS',
        payload: {captchaUrl}
    } as const)
}

export const getAuthUserData = (): ThunkType => async (dispatch) => {
    const meData = await authAPI.me();

    if (meData.resultCode === ResultCodesEnum.Success) {
        let {id, login, email} = meData.data;
        dispatch(actions.setAuthUserData(id, login, email, true));
    }
}

export const login = (email:string, password: string, rememberMe: boolean, captcha: string): ThunkType => async (dispatch) => {
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

export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
    const data = await securityAPI.getCaptchaUrl();
    const captchaUrl = data.url;
    dispatch(actions.getCaptchaUrlSuccess(captchaUrl));
}

export const logout = (): ThunkType => async (dispatch) => {
    const response = await authAPI.logout();

    if (response.data.resultCode === 0) {
        dispatch(actions.setAuthUserData(null, null, null, false))
    }
}

export default authReducer
