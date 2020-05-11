/**
 *  Redux saga class init
 */
import { takeEvery, all } from 'redux-saga/effects';
import * as types from '../actions/types';
import loginSaga from './loginSaga';
import accountVerificationSaga from './accountVerificationSaga'

export default function* watch() {
  yield all([
      takeEvery(types.LOGIN_REQUEST, loginSaga),
      takeEvery(types.ACCOUNT_VERIFICATION_REQUEST, accountVerificationSaga)
  ]);
}
