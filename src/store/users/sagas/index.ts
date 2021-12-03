import { all } from 'redux-saga/effects'
import { signOutFlow } from './auth'

export function* authSaga() {
  yield all([signOutFlow()])
}
