import * as types from './types';

export function requestListOfInstructors(tokens){
    return {
        type: types.INSTRUCTOR_FETCH_LIST_REQUEST,
        tokens
    }
}

export function onListOfInstructorsResponse(response) {
    return {
        type: types.INSTRUCTOR_FETCH_LIST_RESPONSE,
        response
    }
}

export function toggleFlatListRefresh(value) {
    return {
        type: types.INSTRUCTOR_LIST_REFRESH_TOGGLE,
        value
    }
}
