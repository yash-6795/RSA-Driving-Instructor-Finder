import {call, put} from "redux-saga/effects";
import * as instructorAction from 'app/actions/instructorActions'
import * as loaderActions from "app/actions/loaderActions"
import * as fetchInstructor from "app/api/methods/Instructor/list"
import * as tokenActions from "../actions/tokenActions";

import {Alert} from "react-native";

export default function* instructorAsync(action) {
    yield put(loaderActions.enableLoader());
    const response = yield call(fetchInstructor.instructorList, action.tokens.access);
    if (response.success) {
        yield put(instructorAction.onListOfInstructorsResponse(response.data));
        yield put(loaderActions.disableLoader({}));
    } else {
        yield put(loaderActions.disableLoader({}));
        setTimeout(() => {
            Alert.alert('Fetch Error', response.data.detail ? response.data.detail : response.data.error.message);
        }, 5);
        if(response.data.detail.includes("token not valid")){
            yield put(tokenActions.tokenRefreshRequest(action.tokens.refresh))
        }
    }
}
