/*
 * combines all th existing reducers
 */
import * as loadingReducer from './loadingReducer';
import * as loginReducer from './loginReducer';
import * as appointmentReducer from './appointmentReducer';
import * as accountVerificationReducer from './accountVerificationReducer';

export default Object.assign(loginReducer, loadingReducer, appointmentReducer, accountVerificationReducer);
