/* Login Reducer
 * handles login states in the app
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/actions/types';

const initialState = {
    "verification_code": '',
    "is_verified": false,
    "user_id": '',
};

export const userRegistrationReducer = createReducer(initialState, {
    [types.ACCOUNT_VERIFICATION_RESPONSE](state, action) {
        return {
            ...state,
            ...action.response,
        };
    },
    [types.ACCOUNT_REGISTRATION_FAILED](state) {
        return {
            ...state,
        };
    },
});
