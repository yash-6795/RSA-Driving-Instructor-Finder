/* Redux saga class
 * logins the user into the app
 * requires username and password.
 * un - username
 * pwd - password
 */
import { put, call, select } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import { Alert } from 'react-native';
import loginUser from 'app/api/methods/loginUser';
import * as loginActions from 'app/actions/loginActions';
import * as navigationActions from 'app/actions/navigationActions';
// Our worker Saga that logins the user
export default function* loginAsync(action) {
  yield put(loginActions.enableLoader());
  //how to call api
  const response_api = yield call(loginUser, action.username, action.password);
  console.log('Yash')
  console.log(response_api)
  //mock response
  const response = { success: true, data: { id: 1, isVerified:false } };

  if (response.success) {
    yield put(loginActions.onLoginResponse(response.data));
    yield put(loginActions.disableLoader({}));
    response.data.isVerified ? yield call(navigationActions.resetToHome): yield call(navigationActions.navigateToAccountVerification)
  } else {
    yield put(loginActions.loginFailed());
    yield put(loginActions.disableLoader({}));
    setTimeout(() => {
      Alert.alert('BoilerPlate', response.Message);
    }, 200);
  }
}
