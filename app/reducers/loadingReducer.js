/**
 * Loading reducer made seperate for easy blacklisting
 * Avoid data persist
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/actions/types';

const initialState = {
  isLoginLoading: false,
};

export const loadingReducer = createReducer(initialState, {
  [types.ENABLE_LOADER](state) {
    return { ...state, isLoginLoading: true };
  },
  [types.DISABLE_LOADER](state) {
    return { ...state, isLoginLoading: false };
  },
});
