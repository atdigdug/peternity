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
    'TBD',
  ],
  datasets: [{
    data: [4, 2, 3, 1],
    backgroundColor: [
      '#F56F7E',
      '#FFC600',
      '#ACE832',
      '#E4E4E4',
    ],
    hoverBackgroundColor: [
      '#F56F7E',
      '#FFC600',
      '#ACE832',
      '#E4E4E4',
    ],
    borderColor: 'rgba(255,255,255,0.54)',
  }],
};

const dataConsultant = {
  labels: [
    'Bob',
    'Alice',
    'Chandra',
    'Others',
  ],
  datasets: [{
    data: [2, 1, 1, 6],
    backgroundColor: [
      '#58CCED',
      '#3895D3',
      '#1261A0',
      '#072F5F',
    ],
    hoverBackgroundColor: [
      '#58CCED',
      '#3895D3',
      '#1261A0',
      '#072F5F',
    ],
    borderColor: 'rgba(255,255,255,0.54)',
  }],
};

const dataBU = {
  labels: [
    'Online',
    'Professional',
    'Internal',
    'Others',
  ],
  datasets: [{
    data: [3, 2, 1, 4],
    backgroundColor: [
      '#58CCED',
      '#3895D3',
      '#1261A0',
      '#072F5F',
    ],
    hoverBackgroundColor: [
      '#58CCED',
      '#3895D3',
      '#1261A0',
      '#072F5F',
    ],
    borderColor: 'rgba(255,255,255,0.54)',
  }],
};

const options = {
  legend: {
    display: true,
    position: 'left',
  },
};

const GenericAggregate = () => (
  <Col xl={12}>
    <Row>
      <Col xl={4}>
        <Card>
          <CardBody>
            <div className="card__title">
              <h5 className="bold-text">By Risk</h5>
            </div>
            <Pie data={data} options={options} />
          </CardBody>
        </Card>
      </Col>
      <Col xl={4}>
        <Card>
          <CardBody>
            <div className="card__title">
              <h5 className="bold-text">By Consultant</h5>
            </div>
            <Pie data={dataConsultant} options={options} />
          </CardBody>
        </Card>
      </Col>
      <Col xl={4}>
        <Card>
          <CardBody>
            <div className="card__title">
              <h5 className="bold-text">By Business Unit</h5>
            </div>
            <Pie data={dataBU} options={options} />
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Col>
);

export default GenericAggregate;
