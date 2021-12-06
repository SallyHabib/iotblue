import {
  CREATE_USER_SUCCESS,
  GET_USERS_SUCCESS,
  GET_USER_DETAILS_SUCCESS,
  RESET_SUCCESS,
} from "../actions";
import { UsersActionTypes } from "../actions/types";

interface UsersInitState {
  users: Array<any>;
  userDetails: any;
  total: number;
  success: boolean
}

const initUsersState: UsersInitState = {
  users: [],
  userDetails: {},
  total: 0,
  success: false
};

export const users = (state = initUsersState, action: UsersActionTypes) => {
  switch (action.type) {
    case GET_USERS_SUCCESS:
      return { ...state, users: action.payload.data, total: action.payload.total };

    case GET_USER_DETAILS_SUCCESS:
      return { ...state, userDetails: action.payload };

    case CREATE_USER_SUCCESS:
      return {...state, success: true}

    case RESET_SUCCESS:
      return {...state, success: false}

    default:
      return state;
  }
};
