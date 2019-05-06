/* eslint-disable react/no-array-index-key */
import React from 'react';
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

const data = {
  datasets: [{
    label: 'High',
    data: [getRandomInt(50, 200)],
    backgroundColor: [
      '#F56F7E',
    ],
  },
  {
    label: 'Medium',
    data: [getRandomInt(100, 150)],
    backgroundColor: [
      '#FFC600',
    ],
  },
  {
    label: 'Low',
    data: [getRandomInt(150, 250)],
    backgroundColor: [
      '#ACE832',
    ],
  }],
  labels: ['Findings'],
};

const FindingsBar = () => (
  <HorizontalBar data={data} options={options} />
);

export default FindingsBar;
