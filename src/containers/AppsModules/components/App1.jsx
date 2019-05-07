/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
  Row, Col, Card, CardBody, Badge,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import FavoriteIcon from 'mdi-react/StarIcon';
import StatusIcon from 'mdi-react/DoneIcon';
import FindingsBar from '../../AsfShared/FindingsBar';

const Summary = () => (
  <Card>
    <CardBody>
      <Row>
        <Col>
          <div className="card__title">
            <Link to="/appsmodules/detail">
              <h5 className="bold-text">Partner Mobile App</h5>
            </Link>
            <span className="subhead">#3746</span>
          </div>
          <Badge pill><StatusIcon /> Intake</Badge>
        </Col>
        <Col align="right"><FavoriteIcon /></Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <h6 className="bold-text">Consultant:</h6>
          Bob<p />
          <h6 className="bold-text">Platform:</h6>
          Android<p />
          <h6 className="bold-text">Architecture:</h6>
          Java<p />
        </Col>
        <Col>
          <h6 className="bold-text">VERSION 19.2 (LATEST)</h6>
          9 Apr 2019<p />
          <h6 className="bold-text">Risk rating:</h6>
          98.3<p />
          <h6 className="bold-text">Findings: 945</h6>
          <FindingsBar />
        </Col>
      </Row>
    </CardBody>
  </Card>
);

export default Summary;
