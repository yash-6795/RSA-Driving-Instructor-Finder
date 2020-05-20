/*
 * combines all th existing reducers
 */
import * as loadingReducer from './loadingReducer';
import * as loginReducer from './loginReducer';
import * as appointmentReducer from './appointmentReducer';
import * as accountVerificationReducer from './accountVerificationReducer';
import * as userRegistrationReducer from './userRegistrationReducer';


export default Object.assign(loginReducer, loadingReducer, appointmentReducer, accountVerificationReducer, userRegistrationReducer);
