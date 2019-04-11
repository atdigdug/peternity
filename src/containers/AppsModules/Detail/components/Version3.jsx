/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
  Row, Col, Card, CardBody, Progress, Badge,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import CompletedIcon from 'mdi-react/DoneIcon';
import Donut from './SummaryDonut';

const Summary = () => (
  <Card>
    <CardBody>
      <div className="card__title">
        <NavLink to="/appsmodules/detail">
          <h5 className="bold-text">Version 2.06</h5>
        </NavLink>
        <span className="subhead">(12/6/2018)</span>
      </div>
      <Row>
        <Col xl="4">
          <h6 className="bold-text">Risk rating:</h6>
            Low (1023)<p />
          <h6 className="bold-text">Findings risk:</h6>
          <Donut />
        </Col>
        <Col xl="4">
          <div className="card__title">
            <h5 className="bold-text">WhiteHat Scan</h5>
            <span className="subhead">DAST</span>
          </div>
          <div className="progress-wrap progress-wrap--middle">
            <Progress value={100} />
          </div>
          <Badge pill><CompletedIcon /> 12/16/2018</Badge>
          <p />
          as part of <span className="bold-text" style={{ color: 'green' }}>Merger Release</span>
        </Col>
        <Col xl="4">
          &nbsp;
        </Col>
      </Row>
    </CardBody>
  </Card>
);

export default Summary;
