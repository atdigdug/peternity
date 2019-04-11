import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const options = {
  legend: {
    display: true,
    position: 'left',
  },
};

const data = {
  labels: [
    'TBD',
  ],
  datasets: [{
    data: [100],
    backgroundColor: [
      '#E4E4E4',
    ],
    hoverBackgroundColor: [
      '#E4E4E4',
    ],
    borderColor: 'rgba(255,255,255,0.54)',
  }],
};

const EmptyDonut = () => (
  <Doughnut data={data} options={options} />
);

export default EmptyDonut;
