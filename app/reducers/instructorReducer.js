import createReducer from 'app/lib/createReducer';
import * as types from 'app/actions/types';

const initialState = {
    instructors:{},
    isListRefreshing:false,
}

export const instructorReducer = createReducer(initialState,{
    [types.INSTRUCTOR_FETCH_LIST_RESPONSE](state, action){
        return {
            ...state,
            instructors: {
                ...action.response,
            }
        };
    },

    [types.INSTRUCTOR_LIST_REFRESH_TOGGLE](state, action){
        return {
            ...state,
            isListRefreshing: action.value
        }
    }
})
