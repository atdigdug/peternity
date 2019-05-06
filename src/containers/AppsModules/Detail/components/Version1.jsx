/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
  Row, Col, Card, CardBody, Progress, Badge,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import InProgressIcon from 'mdi-react/RotateRightIcon';
import FindingsBar from '../../../AsfShared/FindingsBar';

const Summary = () => (
  <Card>
    <CardBody>
      <div className="card__title">
        <NavLink to="/appsmodules/detailversion">
          <h5 className="bold-text">Version 2.14 (LATEST)</h5>
        </NavLink>
        <span className="subhead">(2/22/2019)</span>
        <br />
        <Badge pill color="success"><InProgressIcon /> Onboarding</Badge>&nbsp;
        <Badge pill>2</Badge>&nbsp;
        <Badge pill>3</Badge>
      </div>
      <hr />
      <Row>
        <Col xl="4">
          <h6 className="bold-text">Risk rating:</h6>
          TBD<p />
          <h6 className="bold-text">Findings risk:</h6>
          <FindingsBar />
        </Col>
        <Col xl="4">
          <div className="card__title">
            <h5 className="bold-text">Whitehat Scan</h5>
            <span className="subhead">DAST</span>
          </div>
          <div className="progress-wrap progress-wrap--middle progress-wrap--blue">
            <Progress value={20} />
          </div>
          Risk Rating: TBD
          <p />
          as part of <span className="bold-text" style={{ color: 'green' }}>Merger Release</span>

          <div className="card__title">
            <h5 className="bold-text">Veracode Scan</h5>
            <span className="subhead">OSS</span>
          </div>
          <div className="progress-wrap progress-wrap--middle">
            <Progress value={100} />
          </div>
          Risk Rating: TBD
          <p />
          as part of <span className="bold-text" style={{ color: 'green' }}>CRM Update</span>
        </Col>
        <Col xl="4">
          <div className="card__title">
            <h5 className="bold-text">Nexus Scan</h5>
            <span className="subhead">OSS</span>
          </div>
          <div className="progress-wrap progress-wrap--middle">
            <Progress value={100} />
          </div>
          Risk Rating: 54.7
          <p />
          as part of <span className="bold-text" style={{ color: 'green' }}>CRM Update</span>
        </Col>
      </Row>
    </CardBody>
  </Card>
);

export default Summary;
