import {
  GET_USERS_SUCCESS,
  GET_USERS_FAILED,
  GET_USER_DETAILS_SUCCESS,
  GET_USER_DETAILS_FAILED,
  CREATE_USER_SUCCESS,
  RESET_SUCCESS,
} from ".";

export interface InGetUserSuccessAction {
  type: typeof GET_USERS_SUCCESS;
  payload: InGetUserSuccessPayload;
}
export interface InGetUserFailedAction {
  type: typeof GET_USERS_FAILED;
}

export interface InGetUserDetailsSuccessAction {
  type: typeof GET_USER_DETAILS_SUCCESS;
  payload: InGetUserDetailsSuccessPayload;
}
export interface InGetUserDetailsFailedAction {
  type: typeof GET_USER_DETAILS_FAILED;
}

export interface InCreateUserSuccessAction {
  type: typeof CREATE_USER_SUCCESS;
  payload: any;
}

export interface ResetSuccessAction {
  type: typeof RESET_SUCCESS;
}

export type UsersActionTypes =
  | InGetUserSuccessAction
  | InGetUserFailedAction
  | InGetUserDetailsSuccessAction
  | InGetUserDetailsFailedAction
  | InCreateUserSuccessAction
  | ResetSuccessAction;
