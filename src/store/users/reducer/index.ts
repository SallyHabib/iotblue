import {
  GET_USERS_REQUEST,
  GET_USERS_FAILED,
  GET_USERS_SUCCESS,
  GET_USER_DETAILS_SUCCESS,
} from "../actions";
import { UsersActionTypes } from "../actions/types";

interface UsersInitState {
  users: Array<any>;
  userDetails: any;
}

const initUsersState: UsersInitState = {
  users: [],
  userDetails: {},
};

export const users = (state = initUsersState, action: UsersActionTypes) => {
  switch (action.type) {
    case GET_USERS_SUCCESS:
      return { ...state, users: action.payload };

    case GET_USER_DETAILS_SUCCESS:
      return { ...state, USER: action.payload };

    default:
      return state;
  }
};
