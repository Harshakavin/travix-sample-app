import { ADDBOOKING, CLOSEBOOKING, SETBOOKING, UPDATEBOOKING } from "../actions/actionTypes";

const findIndex = (id, state) => {
    return state.findIndex(booking => booking.id === id);
}

const bookingReducer = (state = [], action) => {
    switch (action.type) {
        case SETBOOKING:
            {
                return action.payload.bookings
            }
        case ADDBOOKING:
            {
                return [...state, action.payload.booking]
            }
        case CLOSEBOOKING:
            {
                const index = findIndex(action.payload.booking.id, state);
                const newBookings = [...state];
                newBookings[index].status = "CLOSED";
                return {
                    ...state, //copying the orignal state
                    bookings: newBookings,
                }
            }
        case UPDATEBOOKING:
            {
                const index = findIndex(action.payload.booking.id, state);
                const newBookings = [...state];
                newBookings[index] = action.payload.booking;
                return {
                    ...state, //copying the orignal state
                    state: newBookings,
                }
            }

        default: return state;
    }
}

export default bookingReducer;