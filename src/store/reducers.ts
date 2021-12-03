import { connectRouter } from 'connected-react-router'
import { History } from 'history'
import { combineReducers } from 'redux'
import { auth } from './users/reducer'

const createRootReducer = (history: any) =>
  combineReducers({ router: connectRouter(history), auth })

export default createRootReducer
