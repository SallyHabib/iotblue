import { connectRouter } from 'connected-react-router'
import { combineReducers } from 'redux'
import { users } from './users/reducer'

const createRootReducer = (history: any) =>
  combineReducers({ router: connectRouter(history), users })

export default createRootReducer
