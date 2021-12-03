import { all } from '@redux-saga/core/effects'
import { authSaga } from './users/sagas'

export default function* rootSaga() {
  yield all([authSaga()])
}
