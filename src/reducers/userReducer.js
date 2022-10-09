import { sessionkey, SIGN_IN, SIGN_OUT } from "../actions/actionTypes";

const user = localStorage.getItem(sessionkey);
const userInfo = user != null ? JSON.parse(user) : null;

const initialState = { isLogged : (userInfo ? true : false), info: userInfo };

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case SIGN_IN : 
            { 
                localStorage.setItem(sessionkey, JSON.stringify(action.payload.info));
                return { isLogged : true, info :action.payload.info } 
            };
        case SIGN_OUT :
            { 
                localStorage.removeItem(sessionkey);
                return { isLogged : false, info : null } 
            };

        default : return state;
    }
}

export default userReducer;