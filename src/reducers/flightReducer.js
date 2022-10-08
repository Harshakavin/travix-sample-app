import { SETSFLIGHTS } from "../actions/actionTypes";

const initialState = []


const flightReducer = (state = initialState, action) => {
    switch (action.type) {
        case SETSFLIGHTS:
            {
                return action.payload.flights;
            }

        default: return state;
    }
}

export default flightReducer;