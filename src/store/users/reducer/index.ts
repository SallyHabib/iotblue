import {
  CREATE_USER_FAILED,
  CREATE_USER_SUCCESS,
  GET_USERS_FAILED,
  GET_USERS_SUCCESS,
  GET_USER_DETAILS_FAILED,
  GET_USER_DETAILS_SUCCESS,
  RESET_SUCCESS,
} from "../actions";
import { UsersActionTypes } from "../actions/types";

interface UsersInitState {
  users: Array<GetUsersObject>;
  userDetails: UserDetails;
  total: number;
  success: boolean;
  errorOccured: boolean;
}

const initUsersState: UsersInitState = {
  users: [],
  userDetails: {
    dateOfBirth: "",
  email: "",
  firstName: "",
  gender: "",
  id: "",
  lastName: "",
  location: {
    street: "",
    city: "",
    state: "",
    country: "",
    timezone: "",
  },
  phone: "",
  picture: "",
  registerDate: "",
  title: "",
  updatedDate: "",
  },
  total: 0,
  success: false,
  errorOccured: false,
};

export const users = (state = initUsersState, action: UsersActionTypes) => {
  switch (action.type) {
    case GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload.data,
        total: action.payload.total,
      };

    case GET_USER_DETAILS_SUCCESS:
      return { ...state, userDetails: action.payload };

    case CREATE_USER_SUCCESS:
      return { ...state, success: true };

    case RESET_SUCCESS:
      return { ...state, success: false };

    case GET_USER_DETAILS_FAILED:
      return { ...state, errorOccured: true };
      
    case GET_USERS_FAILED:
      return { ...state, errorOccured: true };

    case CREATE_USER_FAILED:
      return { ...state, errorOccured: true };

    default:
      return state;
  }
};
