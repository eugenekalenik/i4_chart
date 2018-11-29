export const currency = '145'; // USD: 145
export const canvas = document.querySelector('canvas');
export const ctx = canvas.getContext('2d');

const strokeStyle = '#ddd';
const lineCap = 'round';
const lineWidth = 2;

export const chartOptions = {
  type: 'line',
  axes: [
    { x1: 100, y1: 0, x2: 100, y2: 500, strokeStyle, lineCap, lineWidth },
    { x1: 100, y1: 500, x2: 900, y2: 500, strokeStyle, lineCap, lineWidth },
  ],
};