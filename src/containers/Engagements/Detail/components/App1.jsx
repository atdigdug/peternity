/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
  Card, CardBody, Progress, Row, Col,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { Doughnut, HorizontalBar } from 'react-chartjs-2';
import StatusIcon from 'mdi-react/DoneIcon';

const oldOptions = {
  legend: {
    display: true,
    position: 'left',
  },
};

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

const oldData = {
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
};

const data = {
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
};

const App = () => (
  <Card>
    <CardBody>
      <div className="card__title">
        <NavLink to="/appsmodules/detail">
          <h5 className="bold-text">Partner Mobile App</h5>
        </NavLink>
        <span className="subhead">v19.2</span>
      </div>
      <div className="progress-wrap progress-wrap--middle">
        <Progress value={100} />
      </div>
      <Row>
        <Col>
          <StatusIcon /> Risk model
        </Col>
        <Col align="right">
        Risk rating: 427
        </Col>
      </Row>
      <p />
      <h6 className="bold-text">Scans:</h6>
      WhiteHat | Veracode
      <p />
      <h6 className="bold-text">Findings risk:</h6>
      <Doughnut data={oldData} options={oldOptions} />
      <HorizontalBar data={data} options={options} />
    </CardBody>
  </Card>
);

export default App;
