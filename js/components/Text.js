import { ctx } from '../constants/index.js';


export default class Text {
  constructor(data) {
    this.data = data;
    this.render();
  }

  render() {
    const { text, x, y } = this.data;

    ctx.beginPath();
    ctx.font = "12px Arial";
    ctx.fillStyle = "#000";
    ctx.textStyle = 'bold';
    ctx.fillText(text, x, y);
    ctx.closePath();
  }
}