import Line from './Line.js';
import Round from './Round.js';
import Text from './Text.js';
import { canvas, ctx, chartOptions } from '../constants/index.js';


export default class Chart {
  constructor(data) {
    this.data = data;
    this.render();
  }

  render() {
    this.drawGrid();
    this.drawAxes();
    this.drawXLabels();
    this.drawYLabels(); // Need work
    this.drawChartLines(); // Need work
    this.drawDots();
    this.drawTooltips();

    // this.drawGridXYZ();
  }

  drawGrid() {
    this.data.map((item, index) => {
      const x = index * (canvas.width - chartOptions.axes[0].x1) / this.data.length + 100;
      const yLine = index * 500 / this.data.length;

      // Draw hotizontal grid lines
      new Line({
        x1: 100,
        y1: yLine,
        x2: 900,
        y2: yLine,
        strokeStyle: '#eee',
        lineCap: 'round',
        lineWidth: 1
      });

      // Draw vertical grid lines
      new Line({
        x1: x,
        y1: 0,
        x2: x,
        y2: 500,
        strokeStyle: '#eee',
        lineCap: 'round',
        lineWidth: 1
      });
    });
  }

  drawAxes() {
    chartOptions.axes.map(item => new Line(item));
  }

  drawXLabels() {
    this.data.map((item, index) => {
      const x = index * (canvas.width - chartOptions.axes[0].x1) / this.data.length + 100;
      const text = new Date(item.Date).getDate() + '.' + new Date(item.Date).getMonth();

      new Text({ text, x: x - 15, y: 550 }); // X labels
    })
  }

  drawYLabels() {
    const minRate = this.getMinRate();
    const minValue = Math.floor(minRate * 100) / 100;

    this.data.map((item, index) => {
      const yLine = index * (canvas.height - 100) / this.data.length;

      // new Text({ text: minValue * index - index * 2 + 2, x: 50, y: yLine }); // Y label
      new Text({ text: '-', x: 98, y: yLine + 3 }); // Y label
    })
  }

  drawDots() {
    this.data.map((item, index) => {
      const x = index * (canvas.width - chartOptions.axes[0].x1) / this.data.length + 100;
      const y = item.Cur_OfficialRate * 10000 - 21000;

      new Round({
        x: x,
        y: (550 - y) * .8,
        radius: 5,
        strokeStyle: '#f00',
        lineWidth: 1,
        fillStyle: '#fcc'
      });
    })
  }

  drawChartLines() {
    let prevRate = 0;

    this.data.map((item, index) => {
      const x = index * (canvas.width - chartOptions.axes[0].x1) / this.data.length + 42;
      const x2 = (index + 1) * (canvas.width - chartOptions.axes[0].x1) / this.data.length + 42;
      const currentRate = canvas.height - (item.Cur_OfficialRate * 100 - 209) * 80 - 80;

      console.log('x', x);
      console.log('x2', x2);
      console.log('currentRate', currentRate);
      console.log('-----');

      if (prevRate !== 0) {
        new Line({
          x1: x,
          y1: prevRate,
          x2: x2,
          y2: currentRate,
          strokeStyle: '#f66',
          lineCap: 'round',
          lineWidth: 2
        });
      }

      prevRate = currentRate;
    });
  }
  
  drawTooltips() {
    this.data.map((item, index) => {
      const x = index * (canvas.width - chartOptions.axes[0].x1) / this.data.length + 100;
      const y = item.Cur_OfficialRate * 10000 - 21000;
      const rate = item.Cur_OfficialRate;

      new Text({ text: rate, x: x + 10, y: (550 - y) * .8 - 10 }); // Tooltip
    })
  }

  // getMinRate helper
  getMinRate() {
    let minRate = Infinity;

    this.data.map(item => {
      if (item.Cur_OfficialRate < minRate) {
        minRate = item.Cur_OfficialRate;
      } else {
        return;
      }
    });

    return minRate;
  }

  // getMaxRate helper
  getMaxRate() {
    let maxRate = 0;

    this.data.map(item => {
      if (item.Cur_OfficialRate > maxRate) {
        maxRate = item.Cur_OfficialRate;
      } else {
        return;
      }
    });

    return maxRate;
  }

  // drawABC() {
  //   const minRate = this.getMinRate();
  //   const maxRate = this.getMaxRate();
  //   const minValue = Math.floor(minRate * 100) / 100;
  //   const maxValue = Math.ceil(maxRate * 100) / 100;

  //   this.data.map((item, index) => {
  //     const x = index * (canvas.width - chartOptions.axes[0].x1) / this.data.length + 100;
  //     const x2 = (index + 1) * (canvas.width - chartOptions.axes[0].x1) / this.data.length + 100;
  //     const yLine = index * 500 / this.data.length;
  //     const y = item.Cur_OfficialRate * 10000 - 21000;
  //     const text = new Date(item.Date).getDate() + '.' + new Date(item.Date).getMonth();
  //     const rate = item.Cur_OfficialRate;
  //   });
  // }

  // drawGridXYZ() {
  //   const minRate = this.getMinRate();
  //   const maxRate = this.getMaxRate();
  //   const minValue = Math.floor(minRate * 100) / 100;
  //   const maxValue = Math.ceil(maxRate * 100) / 100;

  //   this.data.map((item, index) => {
  //     const x = index * (canvas.width - chartOptions.axes[0].x1) / this.data.length + 100;
  //     const yLine = index * (canvas.height - chartOptions.axes[0].y1 - chartOptions.axes[0].x1) / this.data.length;
  //     const y = item.Cur_OfficialRate * 10000 - 21000;
  //     const text = new Date(item.Date).getDate() + '.' + new Date(item.Date).getMonth();
  //     const rate = item.Cur_OfficialRate;
  //     // X
  //     new Line({
  //       x1: 100,
  //       y1: yLine,
  //       x2: 900,
  //       y2: yLine,
  //       strokeStyle: '#f8f8f8',
  //       lineCap: 'round',
  //       lineWidth: 1
  //     });
  //     // Y
  //     new Line({
  //       x1: x,
  //       y1: 0,
  //       x2: x,
  //       y2: 500,
  //       strokeStyle: '#f8f8f8',
  //       lineCap: 'round',
  //       lineWidth: 1
  //     });
  //     new Text({ text, x: x - 15, y: 550 }); // X
  //     new Text({ text: rate, x: 50, y: (550 - y) * .8 }); // Y
  //     new Round({
  //       x: x,
  //       y: (550 - y) * .8,
  //       radius: 5,
  //       strokeStyle: '#f00',
  //       lineWidth: 1,
  //       fillStyle: '#fcc'
  //     });
  //   });
  // }
}