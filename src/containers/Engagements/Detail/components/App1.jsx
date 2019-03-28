/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
  Row, Col, Card, CardBody, Progress,
} from 'reactstrap';
import { Doughnut } from 'react-chartjs-2';

const options = {
  legend: {
    display: true,
    position: 'left',
  },
};

const data = {
  labels: [
    'Red',
    'Blue',
    'Yellow',
  ],
  datasets: [{
    data: [50, 100, 150],
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
      <Row>
        <Col>
          Sonia App v19.2
          <div className="progress-wrap progress-wrap--middle progress-wrap--blue">
            <Progress value={80} />
          </div>
          Risk model Risk rating: 427
          <h6>Scans:</h6>
          WhiteHat | Veracode
          <h6>Findings risk:</h6>
          <Doughnut data={data} options={options} />
        </Col>
      </Row>
    </CardBody>
  </Card>
);

export default App;
