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
    'Red',
    'Blue',
    'Yellow',
  ],
  datasets: [{
    data: [getRandomInt(50, 200), getRandomInt(100, 150), getRandomInt(150, 250)],
    backgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56',
    ],
    hoverBackgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56',
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
