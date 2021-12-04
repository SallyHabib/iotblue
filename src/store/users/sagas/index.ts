import { all, takeEvery } from 'redux-saga/effects'
import { GET_USERS_REQUEST, GET_USER_DETAILS } from '../actions';
import { getUsers, getUserDetails } from './users'

export default function* usersSaga() {
  yield all([
    takeEvery(GET_USERS_REQUEST, getUsers),
    takeEvery(GET_USER_DETAILS, getUserDetails),
  ]);
}