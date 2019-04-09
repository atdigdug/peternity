/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
  Row, Col, Card, CardBody, Progress,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
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
      <hr />
      <Row>
        <Col xl="4">
          <h6 className="bold-text">Findings risk:</h6>
          <Donut />
        </Col>
        <Col xl="4">
          <h6 className="bold-text">Due Date:</h6>
          7/27/2019<p />
          <h6 className="bold-text">Consultant:</h6>
          Bob<p />
          <h6 className="bold-text">Risk rating:</h6>
          Low (893)<p />
          <h6 className="bold-text">Progress:</h6>
          <p />
          <div className="progress-wrap progress-wrap--middle progress-wrap--blue">
            <Progress value={80} />
          </div>
        </Col>
        <Col xl="4">&nbsp;</Col>
      </Row>
    </CardBody>
  </Card>
);

export default Summary;
