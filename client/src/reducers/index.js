import { combineReducers } from 'redux';
import checkout from './checkOutReducer';
import stdinout from './stdinoutReducer';
import services from './serviceReducer';
import appointment from './appointmentReducer';

export default combineReducers({
  checkout,
  stdinout,
  services,
  appointment,
});
