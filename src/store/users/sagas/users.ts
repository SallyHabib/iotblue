import { call, cancel, fork, put, take } from 'redux-saga/effects'
import { history } from '../..'

export function* getUsers() {
  // while (true) {
  //   yield take(SIGN_OUT_REQUEST)
  //   yield call(signOut)
  //   yield put({ type: SIGN_OUT })
  //   yield history.push('Explore')
  // }
}