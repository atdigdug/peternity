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

const data = {
  labels: [
    'TBD',
  ],
  datasets: [{
    data: [100],
    backgroundColor: [
      '#eff1f5',
    ],
    hoverBackgroundColor: [
      '#eff1f5',
    ],
    borderColor: 'rgba(255,255,255,0.54)',
  }],
};

const App = () => (
  <Card>
    <CardBody>
      <div className="card__title">
        <h5 className="bold-text">Vendor Registration App</h5><span className="subhead">v1.02</span>
      </div>
      <div className="progress-wrap progress-wrap--middle progress-wrap--blue">
        <Progress value={20} />
      </div>
      <Row>
        <Col>
          <StatusIcon /> Threat model
        </Col>
        <Col align="right">
        Risk rating: TBD
        </Col>
      </Row>
      <p />
      <h6 className="bold-text">Scans:</h6>
      Veracode
      <p />
      <h6 className="bold-text">Findings risk:</h6>
      <Doughnut data={data} options={options} />
    </CardBody>
  </Card>
);

export default App;
