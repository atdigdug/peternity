/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
  Card, CardBody, Progress, Row, Col,
} from 'reactstrap';
import { Doughnut } from 'react-chartjs-2';
import StatusIcon from 'mdi-react/DoneIcon';

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

const App = () => (
  <Card>
    <CardBody>
      <div className="card__title">
        <h5 className="bold-text">Partner Mobile App</h5><span className="subhead">v19.2</span>
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
      <Doughnut data={data} options={options} />
    </CardBody>
  </Card>
);

export default App;
