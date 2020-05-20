/**
 *  Redux saga class init
 */
import { takeEvery, all } from 'redux-saga/effects';
import * as types from '../actions/types';
import loginSaga from './loginSaga';
import accountVerificationSaga from './accountVerificationSaga'
import registerSaga from "./registerSaga";

export default function* watch() {
  yield all([
      takeEvery(types.LOGIN_REQUEST, loginSaga),
      takeEvery(types.ACCOUNT_VERIFICATION_REQUEST, accountVerificationSaga),
      takeEvery(types.ACCOUNT_REGISTRATION_REQUEST, registerSaga)
  ]);
}
