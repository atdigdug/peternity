/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
  Card, CardBody, Progress, Row, Col, Badge,
} from 'reactstrap';
import InProgressIcon from 'mdi-react/RotateRightIcon';
import FindingsBar from '../../../AsfShared/FindingsBar';

const App = () => (
  <Card>
    <CardBody>
      <div className="card__title">
        <h5 className="bold-text">Customer Portal</h5>
        <span className="subhead">v19.2</span>
        <br />
        <Badge pill color="success"><InProgressIcon /> Onboarding</Badge>&nbsp;
        <Badge pill>2</Badge>&nbsp;
        <Badge pill>3</Badge>
      </div>
      <Row>
        <Col xl="4">
          <h6 className="bold-text">Risk Rating:</h6>
          TBD
          <p />
          <h6 className="bold-text">Findings: 750</h6>
          <div>
            <FindingsBar />
          </div>
        </Col>
        <Col xl="4">
          <div className="card__title">
            <h5 className="bold-text">FxCop Scan</h5>
            <span className="subhead">SAST</span>
          </div>
          <div className="progress-wrap progress-wrap--middle">
            <Progress value={70} />
          </div>
          <p />
          Risk rating: TBD
          <div className="card__title">
            <h5 className="bold-text">Veracode Scan</h5>
            <span className="subhead">SAST</span>
          </div>
          <div className="progress-wrap progress-wrap--middle">
            <Progress value={100} />
          </div>
          <p />
          Risk rating: 54.7
        </Col>
        <Col xl="4">
          <div className="card__title">
            <h5 className="bold-text">CheckMarx Scan</h5>
            <span className="subhead">DAST</span>
          </div>
          <div className="progress-wrap progress-wrap--middle">
            <Progress value={30} />
          </div>
          <p />
          Risk rating: TBD
        </Col>
      </Row>
    </CardBody>
  </Card>
);

export default App;
