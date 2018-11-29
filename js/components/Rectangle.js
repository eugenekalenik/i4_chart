import { ctx } from '../constants/index.js';


export default class Rectangle {
  constructor(data) {
    this.data = data;
    this.render();
  }

  render() {
    const { x1, y1, x2, y2, strokeStyle, lineWidth, fillStyle } = this.data;

    ctx.beginPath();
    ctx.strokeStyle = strokeStyle;
    ctx.lineWidth = lineWidth;
    ctx.fillStyle = fillStyle;
    ctx.rect(x1, y1, x2, y2);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
  }
}