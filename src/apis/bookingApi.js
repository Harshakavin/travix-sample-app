import axios from 'axios';
import { sessionkey } from '../actions/actionTypes';

const user = localStorage.getItem(sessionkey);
const userName = user != null ? JSON.parse(user).userName : null;
//console.log(JSON.parse(user).userName);

export const fetchBookingData =  async () => {
   return await axios.get('http://localhost:3003/v1/bookings?limit=100', {
    headers: {
      Authorization: 'Bearer ' + userName //the token is a variable which holds the token
    }
   });
}

export const addBookingAPI =  async (booking) => {
  return await axios.post('http://localhost:3003/v1/bookings',booking, {
   headers: {
     Authorization: 'Bearer ' + userName //the token is a variable which holds the token
   }
  });
}