import {profileAPI, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {PostType,
        ProfileType,
        PhotosType,} from "../types/types"

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';



let initialState = {
    postsData: [
        {id: 1, message: 'Hi, how are you?', likesCount: 3},
        {id: 2, message: 'It\'s my first post', likesCount: 14},
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: '',
    newPostText: ''
}

export type InitialStateType = typeof initialState;

const profileReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case ADD_POST:
            let text = action.newPostText
            return {
                ...state,
                postsData: [...state.postsData, {id: 3, message: text, likesCount: 0}],
                newPostText: '',
            }
        case SET_USER_PROFILE:
            return {
                ...state, profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state, status: action.status
            }
        case DELETE_POST:
            return {
               ...state, postsData: state.postsData.filter(p => p.id != action.postsId)
            }
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state, profile: {...state.profile, photos: action.photos } as ProfileType
            }
        default:
            return state;
    }
}

type AddPostActionCreatorActionType = {
    type: typeof ADD_POST
    newPostText: string
}
export const addPostActionCreator = (newPostText:string): AddPostActionCreatorActionType => ({type: ADD_POST, newPostText});
type SetUserProfileActionType = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType
}
export const setUserProfile = (profile:ProfileType): SetUserProfileActionType => ({type: SET_USER_PROFILE, profile});
type DeletePostActionType = {
    type: typeof DELETE_POST
    postsId: number
}
export const deletePost = (postsId:number): DeletePostActionType => ({type: DELETE_POST, postsId});
type SetStatusActionType = {
    type: typeof SET_STATUS
    status: string
}
export const setStatus = (status:string): SetStatusActionType => ({type: SET_STATUS, status});
type SavePhotoSuccessActionType = {
    type: typeof SAVE_PHOTO_SUCCESS
    photos: PhotosType
}
export const savePhotoSuccess = (photos:PhotosType): SavePhotoSuccessActionType => ({type: SAVE_PHOTO_SUCCESS, photos});

export const getUserProfile = (userId:number) => async (dispatch:any) => {
   const response = await usersAPI.getProfile(userId)
            dispatch(setUserProfile(response));
};
export const getStatus = (userId:number) => async (dispatch:any) => {
   const response = await profileAPI.getStatus(userId)
            dispatch(setStatus(response.data));
};

export const updateStatus = (status:string) => async (dispatch:any) => {
   const response = await profileAPI.updateStatus(status)
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
};

export const savePhoto = (file:any) => async (dispatch:any) => {
    const response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
};

export const saveProfile = (profile:ProfileType) => async (dispatch:any, getState:any) => {
    const userId = getState().auth.userId;
    const response = await profileAPI.saveProfile(profile)
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId));
    }else{
        dispatch(stopSubmit("edit-profile", {_error: response.data.messages[0]}))
        return Promise.reject(response.data.messages[0])
    }
    // dispatch(stopSubmit("edit-profile", {"contacts": {'facebook':response.data.messages[0]}}))
};


export default profileReducer
