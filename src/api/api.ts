import axios from "axios";
import { UsersType } from "../types/types";


export const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        "API-KEY": "1821a07d-76d2-415f-8071-1ef0e98d2af4"
    },
});

export enum ResultCodesEnum {
    Success = 0,
    Error = 1,
}

export enum ResultCodeForCaptchaEnum {
    CaptchaIsRequired= 10,
}

export type GetItemsType = {
    items: Array<UsersType>
    totalCount: number
    error: string | null
}
