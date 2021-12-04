import {
 GET_USERS_SUCCESS,
 GET_USERS_FAILED,
 GET_USERS_REQUEST
} from '.'

export interface InGetUserSuccessAction {
  type: typeof GET_USERS_SUCCESS,
  payload: any
}
export interface InGetUserFailedAction {
  type: typeof GET_USERS_FAILED
}

export type UsersActionTypes =
  | InGetUserSuccessAction
  | InGetUserFailedAction
