/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
  Row, Col, Card, CardBody, Progress, Button,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import StatusIcon from 'mdi-react/RotateRightIcon';
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
          <Button className="rounded"><StatusIcon /> in progress...</Button>
          <p />as part of Merger Release
          <div className="card__title">
            <h5 className="bold-text">Veracode Scan</h5>
            <span className="subhead">SAST</span>
          </div>
          <div className="progress-wrap progress-wrap--middle progress-wrap--blue">
            <Progress value={80} />
          </div>
          <Button className="rounded"><StatusIcon /> in progress...</Button>
          <p />as part of Merger Release
        </Col>
        <Col xl="4">
          <div className="card__title">
            <h5 className="bold-text">Veracode Scan</h5>
            <span className="subhead">SAST</span>
          </div>
          <div className="progress-wrap progress-wrap--middle progress-wrap--blue">
            <Progress value={80} />
          </div>
          <Button className="rounded"><StatusIcon /> in progress...</Button>
          <p />as part of Merger Release
        </Col>
      </Row>
    </CardBody>
  </Card>
);

export default Summary;
