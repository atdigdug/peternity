/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
  Card, CardBody, Progress, Row, Col, Badge,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { HorizontalBar } from 'react-chartjs-2';
import CompletedIcon from 'mdi-react/DoneIcon';

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
};

const App = () => (
  <Card>
    <CardBody>
      <div className="card__title">
        <NavLink to="/appsmodules/detail">
          <h5 className="bold-text">Partner Mobile App</h5>
        </NavLink>
        <span className="subhead">v19.2</span>
        <br />
        <Badge pill><CompletedIcon /></Badge>&nbsp;
        <Badge pill><CompletedIcon /></Badge>&nbsp;
        <Badge pill><CompletedIcon /> Risk model</Badge>
      </div>
      <Row>
        <Col xl="4">
          <h6 className="bold-text">Risk Rating:</h6>
          98.3
          <p />
          <h6 className="bold-text">Findings: 945</h6>
          <div>
            <HorizontalBar data={data} options={options} />
          </div>
        </Col>
        <Col xl="4">
          <div className="card__title">
            <h5 className="bold-text">Whitehat Scan</h5>
            <span className="subhead">DAST</span>
          </div>
          <div className="progress-wrap progress-wrap--middle">
            <Progress value={100} />
          </div>
          <p />
          Risk rating: 45.2
        </Col>
        <Col xl="4">
          <div className="card__title">
            <h5 className="bold-text">Veracode Scan</h5>
            <span className="subhead">SAST</span>
          </div>
          <div className="progress-wrap progress-wrap--middle">
            <Progress value={100} />
          </div>
          <p />
          Risk rating: 99.6
        </Col>
      </Row>
    </CardBody>
  </Card>
);

export default App;
