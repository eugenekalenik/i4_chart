import { ctx } from '../constants/index.js';


export default class Line {
  constructor(data) {
    this.data = data;
    this.render();
  }

  render() {
    const { x1, y1, x2, y2, strokeStyle, lineCap, lineWidth } = this.data;

    ctx.beginPath();
    ctx.strokeStyle = strokeStyle;
    ctx.lineCap = lineCap; // butt | round | square
    ctx.lineWidth = lineWidth;
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.closePath();
  }
}