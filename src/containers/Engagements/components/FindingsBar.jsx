import React, { PureComponent } from 'react';
import { HorizontalBar } from 'react-chartjs-2';

const options = {
  scales: {
    xAxes: [{
      stacked: true,
      gridLines: {
        display: false,
        drawBorder: false,
      },
      ticks: {
        display: false,
      },
    }],
    yAxes: [{
      stacked: true,
      barThickness: 20,
      gridLines: {
        display: false,
        drawBorder: false,
      },
      ticks: {
        display: false,
      },
    }],
  },
  legend: {
    display: false,
  },
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * ((max - min) + 1)) + min;
}

const getState = () => ({
  datasets: [{
    label: 'High',
    data: [getRandomInt(50, 200)],
    backgroundColor: [
      '#FF6960',
    ],
  },
  {
    label: 'Medium',
    data: [getRandomInt(100, 150)],
    backgroundColor: [
      '#5AD3F6',
    ],
  },
  {
    label: 'Low',
    data: [getRandomInt(150, 250)],
    backgroundColor: [
      '#B5F434',
    ],
  }],
  labels: ['Findings'],
});

class FindingsBar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: getState(),
    };
  }

  render() {
    const { data } = this.state;

    return (
      <HorizontalBar data={data} options={options} />
    );
  }
}

export default FindingsBar;
