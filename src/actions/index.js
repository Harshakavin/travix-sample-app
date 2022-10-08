
import { fetchFlightData } from '../apis/flightsApi';
import { login } from '../apis/userApi';
import { ADDBOOKING, CLOSEBOOKING, SETSFLIGHTS, SIGN_IN, SIGN_OUT, UPDATEBOOKING } from './actionTypes';

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

export const setBooking = (bookings) => {
    return {
        type: ADDBOOKING,
        payload: {
            bookings : bookings
        }
    }
}

export const addBooking = (booking) => {
    return {
        type: ADDBOOKING,
        payload: {
            booking: booking
        }
    }
}

export const updateBooking = (num) => {
    return {
        type: UPDATEBOOKING,
        payload: {
            num: num
        }
    }
}

export const closeBooking = (num) => {
    return {
        type: CLOSEBOOKING,
        payload: {
            num: num
        }
    }
}