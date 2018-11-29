import { ctx } from '../constants/index.js';


export default class Round {
  constructor(data) {
    this.data = data;
    this.render();
  }

  render() {
    const { x, y, radius, strokeStyle, lineWidth, fillStyle } = this.data;
    const startAngle = 0;
    const endAngle = 2 * Math.PI;
    const clockwise = false;

    ctx.beginPath();
    ctx.strokeStyle = strokeStyle;
    ctx.lineWidth = lineWidth;
    ctx.fillStyle = fillStyle;
    ctx.arc(x, y, radius, startAngle, endAngle, clockwise);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
  }
}