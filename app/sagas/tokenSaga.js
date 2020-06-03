import * as loaderActions from "app/actions/loaderActions"
import * as tokenActions from "../actions/tokenActions";
import {call, put} from 'redux-saga/effects';
import tokenRefreshRequest from "app/api/methods/tokenRefreshRequest"
import {Alert} from "react-native";

export default function* tokenAsync(action) {
    yield put(loaderActions.enableLoader())
    const response = yield call(tokenRefreshRequest,action.refresh)
    console.log(response)
    if(response.success){
        yield put(tokenActions.tokenRefreshResponse(response.data))
        yield put(loaderActions.disableLoader())
    }
    else {
        yield put(loaderActions.disableLoader({}));
        setTimeout(() => {
            Alert.alert('Token Refresh Failed', response.data.detail ? response.data.detail : response.data.error.message);
        }, 200);
    }
}
