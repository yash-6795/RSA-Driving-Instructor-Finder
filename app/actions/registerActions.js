import * as types from "./types";

export function accountCreationRequest(name, email, password){
    return {
        type: types.ACCOUNT_REGISTRATION_REQUEST,
        name,
        email,
        password,
    }
}

export function onAccountCreationResponse(response) {
    return {
        type: types.ACCOUNT_REGISTRATION_RESPONSE,
        response
    }
}

export function enableLoader() {
    return {
        type: types.ENABLE_LOADER,
    };
}

export function disableLoader() {
    return {
        type: types.DISABLE_LOADER,
    };
}