import { currency } from '../constants/index.js';
import { startDate, endDate } from '../helpers/index.js';
import Chart from '../components/Chart.js';


const url = `https://www.nbrb.by/API/ExRates/Rates/Dynamics/${currency}?startDate=${startDate}&endDate=${endDate}`;

export const getRateDynamicRequest = async () => {
  return await fetch(url)
    .then(res => res.json())
    .then(data => new Chart(data))
    .catch(error => console.log('Error: ', error));
}