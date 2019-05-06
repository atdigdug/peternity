/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
  Card, CardBody, Progress, Row, Col, Badge,
} from 'reactstrap';
import InProgressIcon from 'mdi-react/RotateRightIcon';
import FindingsBar from '../../../AsfShared/FindingsBarTbd';

const App = () => (
  <Card>
    <CardBody>
      <div className="card__title">
        <h5 className="bold-text">Vendor Registration App</h5>
        <span className="subhead">v1.02</span>
        <br />
        <Badge pill color="success"><InProgressIcon /> Intake</Badge>
      </div>
      <Row>
        <Col xl="4">
          <h6 className="bold-text">Risk Rating:</h6>
          TBD
          <p />
          <h6 className="bold-text">Findings: TBD</h6>
          <div>
            <FindingsBar />
          </div>
        </Col>
        <Col xl="4">
          <div className="card__title">
            <h5 className="bold-text">Veracode Scan</h5>
            <span className="subhead">SAST</span>
          </div>
          <div className="progress-wrap progress-wrap--middle">
            <Progress value={0} />
          </div>
          <p />
          Risk rating: TBD
        </Col>
        <Col xl="4">
          &nbsp;
        </Col>
      </Row>
    </CardBody>
  </Card>
);

export default App;
