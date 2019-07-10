/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
  Card, CardBody, Badge, Row, Col,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import InProgressIcon from 'mdi-react/RotateRightIcon';
import CompletedIcon from 'mdi-react/DoneIcon';
import FindingsBar from '../../../AsfShared/FindingsBar';

const Summary = () => (
  <Card>
    <CardBody>
      <div className="card__title">
        <NavLink to="/appsmodules/detail">
          <h5 className="bold-text">Data API</h5>
        </NavLink>
        <span className="subhead">Version 2.1</span>
      </div>
      <Badge pill><CompletedIcon /></Badge>&nbsp;
      <Badge pill><CompletedIcon /></Badge>&nbsp;
      <Badge pill color="success"><InProgressIcon /> Risk model</Badge>
      <p />
      <Row>
        <Col>
          <h6 className="bold-text">Risk rating:</h6>
            TBD<p />
          <h6 className="bold-text">Findings risk:</h6>
          <FindingsBar />
        </Col>
      </Row>
    </CardBody>
  </Card>
);

export default Summary;
