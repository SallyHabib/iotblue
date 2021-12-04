import {
GET_USERS_REQUEST,
GET_USERS_FAILED,
GET_USERS_SUCCESS
} from '../actions'
import { UsersActionTypes } from '../actions/types'

interface UsersInitState {
  users: Array<any>
}

const initUsersState: UsersInitState = {
  users: []
}

export const users = (state = initUsersState, action: UsersActionTypes) => {
  switch (action.type) {
    case GET_USERS_SUCCESS:
      console.log(action.payload, "HERERERRERERER")
      return { ...state, users: action.payload }
    default:
      return state
  }
}
