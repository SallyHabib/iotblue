import { all } from '@redux-saga/core/effects'
import usersSaga from './users/sagas/index'

export default function* rootSaga() {
  yield all([usersSaga()])
}
