/* Redux saga class
 * logins the user into the app
 * requires username and password.
 * un - username
 * pwd - password
 */
import {call, put} from 'redux-saga/effects';

import {Alert} from 'react-native';
import loginUser from 'app/api/methods/loginUser';
import * as loginActions from 'app/actions/loginActions';
import * as navigationActions from 'app/actions/navigationActions';
// Our worker Saga that logins the user
export default function* loginAsync(action) {
  yield put(loginActions.enableLoader());
  //how to call api
  const response = yield call(loginUser, action.username, action.password);

  if (response.success) {
    yield put(loginActions.onLoginResponse(response.data));
    yield put(loginActions.disableLoader({}));
    response.data.is_verified ? yield call(navigationActions.resetToHome): yield call(navigationActions.navigateToAccountVerification)
  } else {
    yield put(loginActions.loginFailed());
    yield put(loginActions.disableLoader({}));
    setTimeout(() => {
      Alert.alert('BoilerPlate', response.Message);
    }, 200);
  }
}
