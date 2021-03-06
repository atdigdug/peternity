/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
  Row, Col, Card, CardBody, Progress, Badge,
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
          <h5 className="bold-text">Version 2.1</h5>
        </NavLink>
        <span className="subhead">(1/23/2019)</span>
      </div>
      <Badge pill><CompletedIcon /></Badge>&nbsp;
      <Badge pill><CompletedIcon /></Badge>&nbsp;
      <Badge pill color="success"><InProgressIcon /> Risk model</Badge>
      <p />
      <Row>
        <Col xl="4">
          <h6 className="bold-text">Risk rating:</h6>
            TBD<p />
          <h6 className="bold-text">Findings risk:</h6>
          <FindingsBar />
        </Col>
        <Col xl="4">
          <div className="card__title">
            <h5 className="bold-text">Veracode Scan</h5>
            <span className="subhead">SAST</span>
          </div>
          <div className="progress-wrap progress-wrap--middle progress-wrap--blue">
            <Progress value={80} />
          </div>
          Risk Rating: TBD
          <p />
          as part of <span className="bold-text" style={{ color: 'green' }}>Merger Release</span>

          <div className="card__title">
            <h5 className="bold-text">Checkmarx Scan</h5>
            <span className="subhead">OSS</span>
          </div>
          <div className="progress-wrap progress-wrap--middle">
            <Progress value={100} />
          </div>
          Risk Rating 28.0
          <p />
          as part of <span className="bold-text" style={{ color: 'green' }}>CRM Update</span>
        </Col>
        <Col xl="4">
          &nbsp;
        </Col>
      </Row>
    </CardBody>
  </Card>
);

export default Summary;
