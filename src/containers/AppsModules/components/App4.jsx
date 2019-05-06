/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
  Row, Col, Card, CardBody, Badge,
} from 'reactstrap';
import FavoriteIcon from 'mdi-react/StarOutlineIcon';
import StatusIcon from 'mdi-react/DoneIcon';
import FindingsBar from '../../AsfShared/FindingsBarTbd';

const Summary = () => (
  <Card>
    <CardBody>
      <Row>
        <Col>
          <div className="card__title">
            <h5 className="bold-text">Sonia App</h5>
            <span className="subhead">#4099</span>
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
          Windows<p />
          <h6 className="bold-text">Architecture:</h6>
          Python<p />
        </Col>
        <Col>
          <h6 className="bold-text">VERSION 1.0 (LATEST)</h6>
          16 Jan 2019<p />
          <h6 className="bold-text">Risk rating:</h6>
          TBD<p />
          <h6 className="bold-text">Findings: TBD</h6>
          <FindingsBar />
        </Col>
      </Row>
    </CardBody>
  </Card>
);

export default Summary;
