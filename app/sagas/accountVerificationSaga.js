/* Redux saga class
 * verify the user
 * requires verification_code
 * verification_code - verification_code
 */
import {call, put} from 'redux-saga/effects';

import {Alert} from 'react-native';
import verifyUser from 'app/api/methods/verifyUser';
import * as accountVerificationActions from './../actions/verificationActions';
import * as navigationActions from 'app/actions/navigationActions';
// Our worker Saga that verifies the user

export default function* accountVerificationSagaAsync(action) {
    yield put(accountVerificationActions.enableLoader());
    const response = yield call(verifyUser, action.user_id, action.verification_code);

    if (response.success) {
        yield put(accountVerificationActions.onAccountVerificationResponse(response.data));
        yield put(accountVerificationActions.disableLoader({}));
        response.data.is_verified ? yield call(navigationActions.resetToHome): yield call(navigationActions.navigateToAccountVerification)
    } else {
        yield put(accountVerificationActions.accountVerificationRequestFailed());
        yield put(accountVerificationActions.disableLoader({}));
        setTimeout(() => {
            Alert.alert('BoilerPlate', response.Message);
        }, 200);
    }
}