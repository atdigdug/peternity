/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
  Card, CardBody, Progress, Row, Col, Badge,
} from 'reactstrap';
import { HorizontalBar } from 'react-chartjs-2';
import InProgressIcon from 'mdi-react/RotateRightIcon';

const options = {
  scales: {
    xAxes: [{
      gridLines: {
        display: false,
        drawBorder: false,
      },
      ticks: {
        display: false,
      },
    }],
    yAxes: [{
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

const App = () => (
  <Card>
    <CardBody>
      <div className="card__title">
        <h5 className="bold-text">Vendor Registration App</h5>
        <span className="subhead">v1.02</span>
        <br />
        <Badge pill color="success"><InProgressIcon /> Intake</Badge>
      </div>
      <Row>
        <Col xl="4">
          <h6 className="bold-text">Risk Rating:</h6>
          TBD
          <p />
          <h6 className="bold-text">Findings: TBD</h6>
          <div>
            <HorizontalBar data={data} options={options} />
          </div>
        </Col>
        <Col xl="4">
          <div className="card__title">
            <h5 className="bold-text">Veracode Scan</h5>
            <span className="subhead">SAST</span>
          </div>
          <div className="progress-wrap progress-wrap--middle">
            <Progress value={0} />
          </div>
          <p />
          Risk rating: TBD
        </Col>
        <Col xl="4">
          &nbsp;
        </Col>
      </Row>
    </CardBody>
  </Card>
);

export default App;
