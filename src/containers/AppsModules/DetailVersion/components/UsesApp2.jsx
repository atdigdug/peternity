/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
  Card, CardBody, Badge, Row, Col,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import CompletedIcon from 'mdi-react/DoneIcon';
import FindingsBar from '../../../AsfShared/FindingsBar';

const Summary = () => (
  <Card>
    <CardBody>
      <div className="card__title">
        <NavLink to="/appsmodules/detail">
          <h5 className="bold-text">Platform API</h5>
        </NavLink>
        <span className="subhead">Version 2.06</span>
      </div>
      <Badge pill><CompletedIcon /></Badge>&nbsp;
      <Badge pill><CompletedIcon /></Badge>&nbsp;
      <Badge pill><CompletedIcon /> Risk model</Badge>
      <p />
      <Row>
        <Col>
          <h6 className="bold-text">Risk rating:</h6>
            Low (1023)<p />
          <h6 className="bold-text">Findings risk:</h6>
          <FindingsBar />
        </Col>
      </Row>
    </CardBody>
  </Card>
);

export default Summary;
