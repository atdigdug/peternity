/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
  Card, CardBody, Progress, Row, Col, Badge,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import CompletedIcon from 'mdi-react/DoneIcon';
import FindingsBar from '../../../AsfShared/FindingsBar';

const App = () => (
  <Card>
    <CardBody>
      <div className="card__title">
        <NavLink to="/appsmodules/detailversion">
          <h5 className="bold-text">Partner Mobile App</h5>
        </NavLink>
        <span className="subhead">v2.14</span>
        <br />
        <Badge pill><CompletedIcon /></Badge>&nbsp;
        <Badge pill><CompletedIcon /></Badge>&nbsp;
        <Badge pill><CompletedIcon /> Risk model</Badge>
      </div>
      <Row>
        <Col xl="4">
          <h6 className="bold-text">Risk Rating:</h6>
          98.3
          <p />
          <h6 className="bold-text">Findings: 945</h6>
          <div>
            <FindingsBar />
          </div>
        </Col>
        <Col xl="4">
          <div className="card__title">
            <h5 className="bold-text">Whitehat Scan</h5>
            <span className="subhead">DAST</span>
          </div>
          <div className="progress-wrap progress-wrap--middle">
            <Progress value={100} />
          </div>
          <p />
          Risk rating: 45.2
        </Col>
        <Col xl="4">
          <div className="card__title">
            <h5 className="bold-text">Veracode Scan</h5>
            <span className="subhead">SAST</span>
          </div>
          <div className="progress-wrap progress-wrap--middle">
            <Progress value={100} />
          </div>
          <p />
          Risk rating: 99.6
        </Col>
      </Row>
    </CardBody>
  </Card>
);

export default App;
