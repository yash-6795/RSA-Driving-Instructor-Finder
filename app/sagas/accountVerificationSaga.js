/* Redux saga class
 * verify the user
 * requires verification_code
 * verification_code - verification_code
 */
import { put, call, select } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import { Alert } from 'react-native';
// import loginUser from 'app/api/methods/verifyUser';
import * as accountVerificationActions from './../actions/verificationActions';
import * as navigationActions from 'app/actions/navigationActions';
// Our worker Saga that verifies the user

export default function* accountVerificationSagaAsync() {
    yield put(accountVerificationActions.enableLoader());

    //how to call api
    //const response = yield call(verifyUser, action.verification_code,);
    //mock response
    const response = { success: true, data: { isVerified:true } };

    if (response.success) {
        yield put(accountVerificationActions.onAccountVerificationResponse(response.data));
        yield put(accountVerificationActions.disableLoader({}));
        response.data.isVerified ? yield call(navigationActions.resetToHome): yield call(navigationActions.navigateToAccountVerification)
    } else {
        yield put(accountVerificationActions.accountVerificationRequestFailed());
        yield put(accountVerificationActions.disableLoader({}));
        setTimeout(() => {
            Alert.alert('BoilerPlate', response.Message);
        }, 200);
    }
}