/* User Reducer
 * handles login, registration and user states in the app
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/actions/types';

const initialState = {
    user : {
        id:'',
        isLoggedIn: false,
        username: '',
        password: '',
        tokens : {
            refresh : '',
            access : ''
        },
        isVerified: false,
        verification_code: '',
    }
};

export const userReducer = createReducer(initialState, {
/*
* User registration actions set
*/
    [types.ACCOUNT_REGISTRATION_RESPONSE](state, action) {
        return {
            ...state,
            user:{
                ...state.user,
                ...action.response,
            }
        };
    },
    [types.ACCOUNT_REGISTRATION_FAILED](state) {
        return {
            ...state,
        };
    },

/*
* User verification actions set
*/
    [types.ACCOUNT_VERIFICATION_REQUEST](state, action) {
        return {
            ...state,
            user : {
                ...state.user,
                verification_code: action.verification_code,
            }
        };
    },
    [types.ACCOUNT_VERIFICATION_RESPONSE](state, action) {
        return {
            ...state,
            user : {
                ...state.user,
                isVerified: action.response.is_verified,
            }
        };
    },
    [types.ACCOUNT_VERIFICATION_FAILED](state) {
        return {
            ...state,
            user : {
                ...state.user,
                isVerified: false,
            }
        };
    },

/*
* User login actions set
*/
    [types.LOGIN_REQUEST](state, action) {
        return {
            ...state,
            user : {
                ...state.user,
                username: action.username,
                password: action.password,
            }
        };
    },
    [types.LOGIN_RESPONSE](state, action) {
        return {
            ...state,
            user : {
                ...state.user,
                tokens : {
                    ...state.user.tokens,
                    refresh : action.response.refresh,
                    access : action.response.access,
                },
                isLoggedIn: true,
                ...action.response
            }
        };
    },
    [types.LOGIN_FAILED](state) {
        return {
            ...state,
            user:{
                ...state.user,
                isLoggedIn: false
            }
        };
    },
    [types.USER_LOGOUT](state) {
        return {
            ...state,
            isLoggedIn : false
        }
    },
/*
* Refresh access tokens using refresh tokens
*/

    [types.TOKEN_REFRESH_RESPONSE](state, action) {
        return {
            ...state,
            user:{
                ...state.user,
                tokens:{
                    ...state.user.tokens,
                    access: action.response.access
                }
            }
        }
    }

});
