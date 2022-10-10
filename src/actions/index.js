
import { addBookingAPI, fetchBookingData } from '../apis/bookingApi';
import { fetchFlightData } from '../apis/flightsApi';
import { ADDBOOKING, CLOSEBOOKING, SETBOOKING, SETSFLIGHTS, SIGN_IN, SIGN_OUT, UPDATEBOOKING } from './actionTypes';

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

export const fetchBooking = () => {
    return async function (dispatch, getState){
        const response = await fetchBookingData();
        //const flights = JSON.parse(response.data);
        console.log(response.data.response);

        dispatch({
            type: SETBOOKING,
            payload: {
                bookings : response.data.response
            }
        })
    }
}

export const addBooking = (booking) => {
    return async function (dispatch, getState){
        console.log(booking);
        try{
            const response = await addBookingAPI(booking);
            dispatch(fetchBooking(JSON.parse(response.data.response)))
        }catch(ex){
            console.log('api mocked');
            dispatch(addBookings(booking));
        }
    }
}

export const addBookings = (booking) => {
    return({
        type: ADDBOOKING,
        payload: {
            booking: booking
        }
    })
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

export const setFlights = (flights) => {
    return {
        type: SETSFLIGHTS,
        payload: {
            flights: flights
        }
    }
}


// export const updateBooking = (num) => {
//     return {
//         type: UPDATEBOOKING,
//         payload: {
//             num: num
//         }
//     }
// }

// export const closeBooking = (num) => {
//     return {
//         type: CLOSEBOOKING,
//         payload: {
//             num: num
//         }
//     }
// }