import React, { PureComponent } from 'react';
import { Doughnut } from 'react-chartjs-2';

const options = {
  legend: {
    display: true,
    position: 'left',
  },
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * ((max - min) + 1)) + min;
}

const getState = () => ({
  labels: [
    'High',
    'Medium',
    'Low',
  ],
  datasets: [{
    data: [getRandomInt(50, 200), getRandomInt(100, 150), getRandomInt(150, 250)],
    backgroundColor: [
      '#FF6960',
      '#5AD3F6',
      '#B5F434',
    ],
    hoverBackgroundColor: [
      '#FF6960',
      '#5AD3F6',
      '#B5F434',
    ],
    borderColor: 'rgba(255,255,255,0.54)',
  }],
});

class DynamiclyRefreshedDoughnut extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: getState(),
    };
  }

  render() {
    const { data } = this.state;

    return (
      <Doughnut data={data} options={options} />
    );
  }
}

export default DynamiclyRefreshedDoughnut;
