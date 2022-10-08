import axios from 'axios';
import { promised } from 'q';

export default axios.create({
    baseURL: ""
});

export function login(username,password)  {
    return new Promise((resolve, reject) => {
        resolve({ firstName : "Harsha", lastName : "Kavinda" });
    }); 
}