
import { fetchFlightData } from '../apis/flightsApi';
import { login } from '../apis/userApi';
import { SETSFLIGHTS, SIGN_IN, SIGN_OUT } from './actionTypes';

export const fetchFlights = () => {
    return async function (dispatch, getState){
        const response = await fetchFlightData();
        //const flights = JSON.parse(response.data);
        console.log(response.data);

        dispatch({
            type: SETSFLIGHTS,
            payload: {
                flights: response.data
            }
        })
    }
}

export const setUser = (user) => {
    return({
        type: SIGN_IN,
        payload: {
            info: user
        }
    })
}

export const signOut = () => {
    return {
        type: SIGN_OUT
    }
}