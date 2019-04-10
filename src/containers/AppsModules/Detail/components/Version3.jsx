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
          <h5 className="bold-text">Version 2.1</h5>
        </NavLink>
        <span className="subhead">(1/23/2019)</span>
      </div>
      <Row>
        <Col xl="4">
          <h6 className="bold-text">Risk rating:</h6>
            Low (893)<p />
          <h6 className="bold-text">Findings risk:</h6>
          <Donut />
        </Col>
        <Col xl="4">
          <div className="card__title">
            <h5 className="bold-text">Veracode Scan</h5>
            <span className="subhead">SAST</span>
          </div>
          <div className="progress-wrap progress-wrap--middle progress-wrap--blue">
            <Progress value={80} />
          </div>
          <p><Badge color="success" pill><InProgressIcon /> in progress...</Badge></p>
          <p />as part of Merger Release

          <div className="card__title">
            <h5 className="bold-text">Checkmarx Scan</h5>
            <span className="subhead">OSS</span>
          </div>
          <div className="progress-wrap progress-wrap--middle">
            <Progress value={100} />
          </div>
          <p><Badge pill><CompletedIcon /> 1/24/2019 4:07 PM</Badge></p>
          <p />as part of CRM Update
        </Col>
        <Col xl="4">
          <div className="card__title">
            <h5 className="bold-text">Nexus Scan</h5>
            <span className="subhead">OSS</span>
          </div>
          <div className="progress-wrap progress-wrap--middle">
            <Progress value={100} />
          </div>
          <p><Badge color="secondary" pill><CompletedIcon /> 1/25/2019 6:30 PM</Badge></p>
          <p />as part of CRM Update
        </Col>
      </Row>
    </CardBody>
  </Card>
);

export default Summary;
