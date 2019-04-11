/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
  Row, Col, Card, CardBody, Progress, Badge,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import InProgressIcon from 'mdi-react/RotateRightIcon';
import CompletedIcon from 'mdi-react/DoneIcon';
import Donut from './SummaryDonut';


const Summary = () => (
  <Card>
    <CardBody>
      <div className="card__title">
        <NavLink to="/appsmodules/detail">
          <h5 className="bold-text">Version 2.14 (LATEST)</h5>
        </NavLink>
        <span className="subhead">(2/22/2019)</span>
      </div>
      <Row>
        <Col xl="6">
          <h6 className="bold-text">Risk rating:</h6>
          <div className="dashboard__table-orders-amount">
            <span>Low (1023)</span>
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
          </div>
          <p />
          <h6 className="bold-text">Findings risk:</h6>
          <Donut />
        </Col>
        <Col xl="6">
          <div className="card__title">
            <h5 className="bold-text">Whitehat Scan</h5>
            <span className="subhead">DAST</span>
          </div>
          <div className="progress-wrap progress-wrap--middle progress-wrap--blue">
            <Progress value={20} />
          </div>
          <Badge color="success" pill><InProgressIcon /> in progress...</Badge>
          <p />
          as part of <span className="bold-text" style={{ color: 'green' }}>Merger Release</span>

          <div className="card__title">
            <h5 className="bold-text">Nexus Scan</h5>
            <span className="subhead">OSS</span>
          </div>
          <div className="progress-wrap progress-wrap--middle">
            <Progress value={100} />
          </div>
          <Badge pill><CompletedIcon /> 3/1/2019 3:43 PM</Badge>
          <p />
          as part of <span className="bold-text" style={{ color: 'green' }}>CRM Update</span>
        </Col>
      </Row>
    </CardBody>
  </Card>
);

export default Summary;
