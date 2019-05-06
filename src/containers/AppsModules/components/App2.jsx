/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
  Row, Col, Card, CardBody, Badge,
} from 'reactstrap';
import FavoriteIcon from 'mdi-react/StarOutlineIcon';
import StatusIcon from 'mdi-react/DoneIcon';
import InProgressIcon from 'mdi-react/RotateRightIcon';
import FindingsBar from '../../AsfShared/FindingsBar';

const Summary = () => (
  <Card>
    <CardBody>
      <Row>
        <Col>
          <div className="card__title">
            <h5 className="bold-text">Customer Portal</h5>
            <span className="subhead">#3741</span>
          </div>
          <Badge pill><StatusIcon /> Intake</Badge>&nbsp;
          <Badge pill color="success"><InProgressIcon /> versions engaged</Badge>
        </Col>
        <Col align="right"><FavoriteIcon /></Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <h6 className="bold-text">Consultant:</h6>
          Chandra<p />
          <h6 className="bold-text">Platform:</h6>
          N/A<p />
          <h6 className="bold-text">Architecture:</h6>
          PHP<p />
        </Col>
        <Col>
          <h6 className="bold-text">VERSION 2.14 (LATEST)</h6>
          22 Feb 2019<p />
          <h6 className="bold-text">Risk rating:</h6>
          TBD<p />
          <h6 className="bold-text">Findings: 750</h6>
          <FindingsBar />
        </Col>
      </Row>
    </CardBody>
  </Card>
);

export default Summary;
