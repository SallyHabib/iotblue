export const GET_USERS_REQUEST = "GET_USERS_REQUEST";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const GET_USERS_FAILED = "GET_USERS_FAILED";

export const GET_USER_DETAILS = "GET_USER_DETAILS";
export const GET_USER_DETAILS_SUCCESS = "GET_USER_DETAILS_SUCCESS";
export const GET_USER_DETAILS_FAILED = "GET_USER_DETAILS_FAILED";

export const CREATE_USER_REQUEST = "CREATE_USER_REQUEST";
export const CREATE_USER_SUCCESS = "CREATE_USER_SUCCESS";
export const CREATE_USER_FAILED = "CREATE_USER_FAILED";

export const RESET_SUCCESS = "RESET_SUCCESS";
export const RESET_ERROR = "RESET_ERROR";

export const dispatchGetUsersRequest = (payload: GetUserDetailsPayload) => ({
  type: GET_USERS_REQUEST,
  payload,
});

export const dispatchGetUserDetailsRequest = (
  payload: GetUserDetailsRequestPayload
) => ({ type: GET_USER_DETAILS, payload });

export const dispatchCreateUserRequest = (payload: CreateUserPayload) => ({
  type: CREATE_USER_REQUEST,
  payload,
});

export const dispatchResetSuccessRequest = () => ({ type: RESET_SUCCESS });
export const dispatchResetErrorRequest = () => ({ type: RESET_ERROR });
