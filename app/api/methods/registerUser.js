import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export default function registerUser(name, username, password, userType = 'LEARNER') {
    const apiPromise =  Api(
        ApiConstants.REGISTER,
        {
            email:username,
            password:password,
            name: name,
            user_type: userType,
        },
        'post',
        null,
    );

    return apiPromise
        .then(res => {
            const { statusCode, data } = res;
            return (statusCode===201)? {success:true, data:data} : {success: false, data:data}
        })
        .catch(error => {
            return {success:false, errorMessage: error}
        })
}
