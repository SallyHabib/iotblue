export const GET_USERS_REQUEST = 'GET_USERS_REQUEST'
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS'
export const GET_USERS_FAILED = 'GET_USERS_FAILED'

export const GET_USER_DETAILS = 'GET_USER_DETAILS';
export const GET_USER_DETAILS_SUCCESS = 'GET_USER_DETAILS_SUCCESS';
export const GET_USER_DETAILS_FAILED = 'GET_USER_DETAILS_FAILED';

export const dispatchGetUsersRequest = () => ({ type: GET_USERS_REQUEST });
export const dispatchGetUserDetailsRequest = (payload:any) => ({ type: GET_USER_DETAILS, payload });
