import API from "app/api"
import ApiConstants from '../ApiConstants';


export default function tokenRefreshRequest(refresh) {
    const apiPromise = API(
        ApiConstants.TOKEN_REFRESH,
        {
            refresh
        },
        'post',
        null,
    )
    return apiPromise
        .then(res => {
            const { statusCode, data } = res;
            return (statusCode===200 || statusCode===201)? {success:true, data:data} : {success: false, data:data}
        })
        .catch(error => {
            return {success:false, errorMessage: error}
        })

}
