import * as types from "app/actions/types"

export  function tokenRefreshRequest(refreshToken) {
    return{
        type: types.TOKEN_REFRESH_REQUEST,
        refresh: refreshToken
    }
}

export  function tokenRefreshResponse(response) {
    return{
        type: types.TOKEN_REFRESH_RESPONSE,
        response
    }
}
