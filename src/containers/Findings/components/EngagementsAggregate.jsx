import React from 'react';
import {
  Card, CardBody, Row, Col,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { Pie } from 'react-chartjs-2';

const data = {
  labels: [
    'Scan 1',
    'Scan 2',
    'Scan 3',
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

const dataBU = {
  labels: [
    'Pri 0',
    'Pri 1',
    'Pri 2',
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
    <Card>
      <CardBody>
        <div className="card__title">
          <h5 className="bold-text">Findings Overview</h5>
        </div>
        <Row>
          <Col xl={4}>
            <Card>
              <CardBody style={{ backgroundColor: '#90ee90' }}>
                <NavLink to="/findings/riskanalysis">
                  <div className="card__title">
                    <h5 className="bold-text">By Scan</h5>
                  </div>
                </NavLink>
                <Pie data={data} />
              </CardBody>
            </Card>
          </Col>
          <Col xl={4}>
            <Card>
              <CardBody style={{ backgroundColor: '#90ee90' }}>
                <div className="card__title">
                  <h5 className="bold-text">By App</h5>
                </div>
                <Pie data={dataConsultant} />
              </CardBody>
            </Card>
          </Col>
          <Col xl={4}>
            <Card>
              <CardBody style={{ backgroundColor: '#90ee90' }}>
                <div className="card__title">
                  <h5 className="bold-text">By Status</h5>
                </div>
                <Pie data={dataBU} />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </CardBody>
    </Card>
  </Col>
);

export default EngagementsAggregate;
