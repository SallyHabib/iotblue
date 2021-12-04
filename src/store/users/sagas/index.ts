import { all } from 'redux-saga/effects'
import { getUsers } from './users'

export function* authSaga() {
  yield all([getUsers()])
}
