/* Login Reducer
 * handles login states in the app
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/actions/types';

const initialState = {
    isVerified: false,
    verification_code: '',
};

export const accountVerificationReducer = createReducer(initialState, {
    [types.ACCOUNT_VERIFICATION_REQUEST](state, action) {
        return {
            ...state,
            verification_code: action.verification_code,
        };
    },
    [types.ACCOUNT_VERIFICATION_RESPONSE](state, action) {
        return {
            ...state,
            isVerified: action.response.isVerified,
        };
    },
    [types.LOGIN_FAILED](state) {
        return {
            ...state,
            isVerified: false,
        };
    },
});
