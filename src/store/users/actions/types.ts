import {
  GET_USERS_SUCCESS,
  GET_USERS_FAILED,
  GET_USER_DETAILS_SUCCESS,
  GET_USER_DETAILS_FAILED,
} from ".";

export interface InGetUserSuccessAction {
  type: typeof GET_USERS_SUCCESS;
  payload: any;
}
export interface InGetUserFailedAction {
  type: typeof GET_USERS_FAILED;
}

export interface InGetUserDetailsSuccessAction {
  type: typeof GET_USER_DETAILS_SUCCESS;
  payload: any;
}
export interface InGetUserDetailsFailedAction {
  type: typeof GET_USER_DETAILS_FAILED;
}

export type UsersActionTypes =
  | InGetUserSuccessAction
  | InGetUserFailedAction
  | InGetUserDetailsSuccessAction
  | InGetUserDetailsFailedAction;
