import {
  GET_USERS_SUCCESS,
  GET_USER_DETAILS_SUCCESS,
} from "../actions";
import { UsersActionTypes } from "../actions/types";

interface UsersInitState {
  users: Array<any>;
  userDetails: any;
  offset: number;
  total: number;
}

const initUsersState: UsersInitState = {
  users: [],
  userDetails: {},
  offset: 0,
  total: 0
};

export const users = (state = initUsersState, action: UsersActionTypes) => {
  switch (action.type) {
    case GET_USERS_SUCCESS:
      return { ...state, users: action.payload.data, total: action.payload.total };

    case GET_USER_DETAILS_SUCCESS:
      return { ...state, userDetails: action.payload };

    default:
      return state;
  }
};
