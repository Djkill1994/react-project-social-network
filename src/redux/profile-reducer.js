import {profileAPI, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

let initialState = {
    postsData: [
        {id: 1, message: 'Hi, how are you?', likesCount: 3},
        {id: 2, message: 'It\'s my first post', likesCount: 14},
    ],
    profile: null,
    status: "",
}

const profileReducer = (state = initialState, action) => {

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
                ...state, profile: {...state.profile, photos: action.photos }
            }
        default:
            return state;
    }
}


export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const deletePost = (postsId) => ({type: DELETE_POST, postsId})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos})

export const getUserProfile = (userId) => async (dispatch) => {
   const response = await usersAPI.getProfile(userId)
            dispatch(setUserProfile(response));
};
export const getStatus = (userId) => async (dispatch) => {
   const response = await profileAPI.getStatus(userId)
            dispatch(setStatus(response.data));
};

export const updateStatus = (status) => async (dispatch) => {
   const response = await profileAPI.updateStatus(status)
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
};

export const savePhoto = (file) => async (dispatch) => {
    const response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
};

export const saveProfile = (profile) => async (dispatch, getState) => {
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
