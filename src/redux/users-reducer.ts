import { updateObjectInArray } from "../utils/obj-helpers";
import { UserType } from "../types/types"
import { AppStateType, BaseThunkType, InferActionsTypes } from "./redux-store";
import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { usersAPI } from "../api/users-api";
import { APIResponseType } from '../api/api';

let initialState = {
  users: [] as Array<UserType>,
  pageSize: 10 as number,
  totalUsersCount: 0 as number,
  currentPage: 1 as number,
  isFetching: true as boolean,
  followingInProgress: [] as Array<number>,
};

const usersReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case 'FOLLOW':
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", { followed: true })
      }
    case 'UNFOLLOW':
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", { followed: false })
      }
    case 'SET_USERS': {
      return {
        ...state, users: action.users
      }
    }
    case
    'SET_CURRENT_PAGE': {
      return {
        ...state, currentPage: action.currentPage
      }
    }
    case
    'SET_TOTAL_USERS_COUNT': {
      return {
        ...state, totalUsersCount: action.count
      }
    }
    case
    'TOGGLE_IS_FETCHING': {
      return {
        ...state, isFetching: action.isFetching
      }
    }
    case
    'TOGGLE_IS_FOLLOWING_PROGRESS': {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter(id => id != action.userId)
      }
    }
    default:
      return state;
  }
}
// Action

export const actions = {
  followSuccess: (userId: number) => ({ type: 'FOLLOW', userId }) as const,
  unfollowSuccess: (userId: number) => ({ type: 'UNFOLLOW', userId }) as const,
  setUsers: (users: Array<UserType>) => ({ type: 'SET_USERS', users }) as const,
  setCurrentPage: (currentPage: number) => ({
    type: 'SET_CURRENT_PAGE',
    currentPage
  }) as const,
  setTotalUsersCount: (totalUsersCount: number) => ({
    type: 'SET_TOTAL_USERS_COUNT',
    count: totalUsersCount
  }) as const,
  toggleIsFetching: (isFetching: boolean) => ({
    type: 'TOGGLE_IS_FETCHING',
    isFetching
  }) as const,
  toggleFollowingProgress: (isFetching: boolean, userId: number) => ({
    type: 'TOGGLE_IS_FOLLOWING_PROGRESS',
    isFetching,
    userId
  }) as const,

}

export const requestUsers = (page: number, pageSize: number): ThunkType => {
  return async (dispatch, getState) => {
    dispatch(actions.toggleIsFetching(true));
    dispatch(actions.setCurrentPage(page));

    const data = await usersAPI.getUsers(page, pageSize)
    dispatch(actions.toggleIsFetching(false));
    dispatch(actions.setUsers(data.items));
    dispatch(actions.setTotalUsersCount(data.totalCount));
  }
};

const _followUnfollowFlow = async (dispatch: Dispatch<ActionsType>, userId: number,
                                   apiMethod: (userId:number) => Promise<APIResponseType>,
                                   actionCreator: (userId: number) => ActionsType) => {
  dispatch(actions.toggleFollowingProgress(true, userId));
  const response = await apiMethod(userId)
  if (response.resultCode == 0) {
    dispatch(actionCreator(userId));
  }
  dispatch(actions.toggleFollowingProgress(false, userId))
}

export const follow = (userId: number): ThunkType => {
  return async (dispatch) => {
    await _followUnfollowFlow(dispatch, userId, usersAPI.follow, actions.followSuccess)
  }
};

export const unfollow = (userId: number): ThunkType => {
  return async (dispatch) => {
    await _followUnfollowFlow(dispatch, userId, usersAPI.unFollow, actions.unfollowSuccess)
  }
};

export default usersReducer

export type InitialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType>
