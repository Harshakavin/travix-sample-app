import userReducer  from "./userReducer";
import flightReducer  from "./flightReducer";
import { combineReducers } from 'redux';

const allReducers = combineReducers({ 
     loggedUser : userReducer,
     flights : flightReducer
    });

export default allReducers;