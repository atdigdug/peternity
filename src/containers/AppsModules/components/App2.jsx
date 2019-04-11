/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
  Row, Col, Card, CardBody, Progress, Badge,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import FavoriteIcon from 'mdi-react/StarOutlineIcon';
import StatusIcon from 'mdi-react/RotateRightIcon';
import Donut from '../Detail/components/SummaryDonut';

const Summary = () => (
  <Card>
    <CardBody>
      <Row>
        <Col>
          <div className="card__title">
            <NavLink to="/appsmodules/detail">
              <h5 className="bold-text">Customer Portal</h5>
            </NavLink>
            <span className="subhead">latest version: v2.14 (2/22/2019)</span>
          </div>
        </Col>
        <Col align="right"><FavoriteIcon /></Col>
      </Row>
      <Row>
        <Col>
          <div className="progress-wrap progress-wrap--middle progress-wrap--blue">
            <Progress value={60} />
          </div>
        </Col>
        <Col align="right">
          <Badge color="success" pill><StatusIcon /> scans in progress...</Badge>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <h6 className="bold-text">Architecture:</h6>
          PHP<p />
          <h6 className="bold-text">Total Scans:</h6>
          14<p />
          <h6 className="bold-text">Consultant:</h6>
          Chandra<p />
          <h6 className="bold-text">Risk rating:</h6>
          Low (893)<p />
        </Col>
        <Col>
          <h6 className="bold-text">Findings risk:</h6>
          <Donut />
        </Col>
      </Row>
    </CardBody>
  </Card>
);

export default Summary;