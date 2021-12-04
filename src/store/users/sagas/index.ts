import { all, takeEvery } from 'redux-saga/effects'
import { GET_USERS_REQUEST } from '../actions';
import { getUsers } from './users'

export default function* usersSaga() {
  yield all([
    takeEvery(GET_USERS_REQUEST, getUsers),
  ]);
}