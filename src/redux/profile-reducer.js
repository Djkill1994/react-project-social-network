import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS'

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
        default:
            return state;
    }
}


export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status })
export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId)
        .then(data => {
            dispatch(setUserProfile(data));
        });
};
export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(response=>{
            dispatch(setStatus(response.data));
        });
};
export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(response=>{
            if(response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        });
};


export default profileReducer