/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
  Card, CardBody, Progress, Row, Col,
} from 'reactstrap';
import { Doughnut } from 'react-chartjs-2';
import StatusIcon from 'mdi-react/RotateRightIcon';

const options = {
  legend: {
    display: true,
    position: 'left',
  },
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * ((max - min) + 1)) + min;
}

const data = {
  labels: [
    'High',
    'Medium',
    'Low',
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
};

const App = () => (
  <Card>
    <CardBody>
      <div className="card__title">
        <h5 className="bold-text">Customer Portal</h5><span className="subhead">v2.14</span>
      </div>
      <div className="progress-wrap progress-wrap--middle progress-wrap--blue">
        <Progress value={80} />
      </div>
      <Row>
        <Col>
          <StatusIcon /> Offboarding ...
        </Col>
        <Col align="right">
        Risk rating: 1023
        </Col>
      </Row>
      <p />
      <h6 className="bold-text">Scans:</h6>
      FxCop | CheckMarx
      <p />
      <h6 className="bold-text">Findings risk:</h6>
      <Doughnut data={data} options={options} />
    </CardBody>
  </Card>
);

export default App;
