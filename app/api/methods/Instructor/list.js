import API from 'app/api'
import ApiConstants from "app/api/ApiConstants"
import Api from "../../index";

export function instructorList(token) {
    const apiPromise =  Api(
        ApiConstants.LIST_INSTRUCTOR,
        null,
        'GET',
        token,
    );
    return apiPromise
        .then(res => {
            const { statusCode, data } = res;
            return (statusCode===200)? {success:true, data:data} : {success: false, data:data}
        })
        .catch(error => {
            return {success:false, errorMessage: error}
        })
}
