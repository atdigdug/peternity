import React from 'react';
import {
  Card, CardBody, Row, Col,
} from 'reactstrap';
import { Pie } from 'react-chartjs-2';

const data = {
  labels: [
    'Clarkson',
    'Hammond',
    'May',
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
    'App 1',
    'App 2',
    'App 3',
  ],
  datasets: [{
    data: [30, 30, 40],
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
  <Row>
    <Col xl="6">
      <Card>
        <CardBody style={{ backgroundColor: '#90ee90' }}>
          <div className="card__title">
            <h5 className="bold-text">Irritating Devs</h5>
          </div>
          <Pie data={data} />
        </CardBody>
      </Card>
    </Col>
    <Col xl="6">
      <Card>
        <CardBody style={{ backgroundColor: '#90ee90' }}>
          <div className="card__title">
            <h5 className="bold-text">Irritating Apps</h5>
          </div>
          <Pie data={dataConsultant} />
        </CardBody>
      </Card>
    </Col>
  </Row>
);

export default EngagementsAggregate;
