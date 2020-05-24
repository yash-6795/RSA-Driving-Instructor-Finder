import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export default function verifyUser(user_id, verification_code) {
    const apiPromise =  Api(
        ApiConstants.VERIFY_USER,
        {
            id:user_id,
            verification_code
        },
        'put',
        null,
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
