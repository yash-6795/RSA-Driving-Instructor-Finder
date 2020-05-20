/* Redux saga class
 * register the user into the app
 * requires username and password and name.
 * un - username
 * pwd - password
 * name - name
 */
import { put, call, select } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import { Alert } from 'react-native';
import registerUser from "../api/methods/registerUser";
import * as registerActions from 'app/actions/registerActions';
import * as navigationActions from 'app/actions/navigationActions';
// Our worker Saga that logins the user
export default function* registerAsync(action) {
    yield put(registerActions.enableLoader());
    //how to call api
    const response_api = yield call(registerUser, action.name, action.email, action.password);
    console.log(response_api)
    //mock response
    const response = { success: true, data: { id: 1, isVerified:false } };

    if (response.success) {
        yield put(registerActions.disableLoader({}));
        yield call(navigationActions.resetToHome)
    } else {
        setTimeout(() => {
            Alert.alert('BoilerPlate', "Something is wrong");
        }, 200);
    }
}
