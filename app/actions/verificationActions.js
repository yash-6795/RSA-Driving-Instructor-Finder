import * as types from "./types";

export function accountVerificationRequest(verification_code){
    return {
        type: types.ACCOUNT_VERIFICATION_REQUEST,
        verification_code,
    }
}

export function accountVerificationRequestFailed() {
    return {
        type: types.ACCOUNT_VERIFICATION_FAILED,
    };
}

export function onAccountVerificationResponse(response) {
    return {
        type: types.ACCOUNT_VERIFICATION_RESPONSE,
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
