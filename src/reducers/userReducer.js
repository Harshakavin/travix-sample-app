import { SIGN_IN, SIGN_OUT } from "../actions/actionTypes";

const user = localStorage.getItem('lggedUser');
const userInfo = user != undefined ? JSON.parse(user) : null;

const initialState = { isLogged : (userInfo ? true : false), info: userInfo };

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case SIGN_IN : 
            { 
                localStorage.setItem('lggedUser', JSON.stringify(action.payload.info));
                return { isLogged : true, info :action.payload.info } 
            };
        case SIGN_OUT :
            { 
                localStorage.removeItem('lggedUser');
                return { isLogged : true, info : null } 
            };

        default : return state;
    }
}

export default userReducer;