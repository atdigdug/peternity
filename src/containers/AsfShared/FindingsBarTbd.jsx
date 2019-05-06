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

const data = {
  datasets: [{
    data: [1],
    backgroundColor: '#E4E4E4',
  }],
  labels: ['Findings'],
};

const FindingsBar = () => (
  <HorizontalBar data={data} options={options} />
);

export default FindingsBar;
