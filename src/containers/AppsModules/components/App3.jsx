/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
  Row, Col, Card, CardBody, Progress, Badge,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import FavoriteIcon from 'mdi-react/StarOutlineIcon';
import StatusIcon from 'mdi-react/DoneIcon';
import Donut from './EmptyDonut';

const Summary = () => (
  <Card>
    <CardBody>
      <Row>
        <Col>
          <div className="card__title">
            <NavLink to="/appsmodules/detail">
              <h5 className="bold-text">Vendor Registration App</h5>
            </NavLink>
            <span className="subhead">latest version: v1.02 (1/23/2019)</span>
          </div>
        </Col>
        <Col align="right"><FavoriteIcon /></Col>
      </Row>
      <Row>
        <Col>
          <div className="progress-wrap progress-wrap--middle">
            <Progress value={20} />
          </div>
        </Col>
        <Col align="right">
          <Badge pill><StatusIcon /> Threat Model</Badge>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <h6 className="bold-text">Architecture:</h6>
          Node.js<p />
          <h6 className="bold-text">Total Scans:</h6>
          0<p />
          <h6 className="bold-text">Consultant:</h6>
          Chandra<p />
          <h6 className="bold-text">Risk rating:</h6>
          TBD<p />
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
