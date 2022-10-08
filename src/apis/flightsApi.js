import axios from 'axios';

export default axios.create({
    baseURL: ""
})

export const fetchFlightData =  async () => {
   return await axios.get('https://run.mocky.io/v3/27d39684-7eda-4897-a4ea-48013ed6bf89');
}