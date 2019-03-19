import React from 'react';
import {
  Card, CardBody, Row, Col,
} from 'reactstrap';
import { Pie } from 'react-chartjs-2';

const data = {
  labels: [
    'High',
    'Medium',
    'Low',
  ],
  datasets: [{
    data: [300, 50, 100],
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

const dataConsultant = {
  labels: [
    'Alice',
    'Bob',
    'Chandra',
    'Delta',
    'Echo',
    'Foxtrot',
    'Gerry',
    'Howard',
    'Indigo',
    'Juliet',
  ],
  datasets: [{
    data: [30, 30, 40, 10, 20, 10, 50, 20, 30, 10],
    backgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56',
      '#FF6384',
      '#36A2EB',
      '#FFCE56',
      '#FF6384',
      '#36A2EB',
      '#FFCE56',
      '#36A2EB',
    ],
    hoverBackgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56',
      '#FF6384',
      '#36A2EB',
      '#FFCE56',
      '#FF6384',
      '#36A2EB',
      '#FFCE56',
      '#36A2EB',
    ],
    borderColor: 'rgba(255,255,255,0.54)',
  }],
};

const dataBU = {
  labels: [
    'Online',
    'Professional',
    'Internal',
  ],
  datasets: [{
    data: [25, 5, 100],
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

const EngagementsAggregate = () => (
  <Col xl={12}>
    <Row>
      <Col xl={4}>
        <Card>
          <CardBody>
            <div className="card__title">
              <h5 className="bold-text">By Risk</h5>
            </div>
            <Pie data={data} />
          </CardBody>
        </Card>
      </Col>
      <Col xl={4}>
        <Card>
          <CardBody>
            <div className="card__title">
              <h5 className="bold-text">By Consultant</h5>
            </div>
            <Pie data={dataConsultant} />
          </CardBody>
        </Card>
      </Col>
      <Col xl={4}>
        <Card>
          <CardBody>
            <div className="card__title">
              <h5 className="bold-text">By Business Unit</h5>
            </div>
            <Pie data={dataBU} />
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Col>
);

export default EngagementsAggregate;
