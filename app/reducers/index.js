/*
 * combines all th existing reducers
 */
import * as loadingReducer from './loadingReducer';
import * as appointmentReducer from './appointmentReducer';
import * as userReducer from './userReducer'


export default Object.assign(loadingReducer, appointmentReducer, userReducer);
