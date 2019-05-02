/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
  Row, Col, Card, CardBody, Badge,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import StatusIcon from 'mdi-react/DoneIcon';

const logoWhitehat = `${process.env.PUBLIC_URL}/img/whitehat.png`;

const logostyle = {
  left: 0,
  width: 100,
  lineHeight: '24px',
};

const Summary = () => (
  <Card>
    <CardBody>
      <Row>
        <Col>
          <div className="card__title">
            <NavLink to="/appsmodules/detail">
              <h5 className="bold-text">Whitehat</h5>
            </NavLink>
            <span className="subhead">#14</span>
          </div>
          <Badge pill><StatusIcon /> Risk Model</Badge>
        </Col>
        <Col align="right"><img style={logostyle} src={logoWhitehat} alt="" /></Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <h6 className="bold-text">Architecture:</h6>
          Java<p />
          <h6 className="bold-text">Total Scans:</h6>
          31<p />
          <h6 className="bold-text">Consultant:</h6>
          Bob<p />
          <h6 className="bold-text">Risk rating:</h6>
          Low (893)<p />
        </Col>
        <Col>
          <h6 className="bold-text">Findings risk:</h6>
        </Col>
      </Row>
    </CardBody>
  </Card>
);

export default Summary;
