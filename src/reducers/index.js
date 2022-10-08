import userReducer  from "./userReducer";
import flightReducer  from "./flightReducer";
import { combineReducers } from 'redux';
import bookingReducer from "./bookingReducer";

const allReducers = combineReducers({
     bookingData: bookingReducer,
     loggedUser : userReducer,
     flights : flightReducer
    });

export default allReducers;