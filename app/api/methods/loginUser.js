import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export default function loginUser(username, password) {
  const apiPromise =  Api(
    ApiConstants.LOGIN,
      {
        email:username,
        password:password
      },
    'post',
    null,
  );

  return apiPromise
        .then(res => {
            const { statusCode, data } = res;
            return (statusCode===200)? {success:true, data:data} : {success: false, data:data}
        })
      .catch(error => {
          return {
              success:false,
              data: {
              error
              }
          }
      })
}
