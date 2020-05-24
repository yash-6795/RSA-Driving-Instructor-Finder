/* Redux saga class
 * register the user into the app
 * requires username and password and name.
 * un - username
 * pwd - password
 * name - name
 */
import {call, put} from 'redux-saga/effects';

import {Alert} from 'react-native';
import registerUser from "../api/methods/registerUser";
import * as registerActions from 'app/actions/registerActions';
import * as navigationActions from 'app/actions/navigationActions';
// Our worker Saga that logins the user
export default function* registerAsync(action) {
    yield put(registerActions.enableLoader());
    const response = yield call(registerUser, action.name, action.email, action.password);
    if (response.success) {
        // Call action to update state with user information
        yield put(registerActions.onAccountCreationResponse(response.data))
        // Disable loader
        yield put(registerActions.disableLoader({}));
        // Navigate to user verification
        yield call(navigationActions.resetToAccountVerification)
    } else {
        setTimeout(() => {
            Alert.alert('BoilerPlate', "Something is wrong");
        }, 200);
    }
}
