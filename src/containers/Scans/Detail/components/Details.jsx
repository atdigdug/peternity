/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
  Row, Col, Card, CardBody,
} from 'reactstrap';
import FindingsBar from '../../../AsfShared/FindingsBar';

const Summary = () => (
  <Card>
    <CardBody>
      <Row>
        <Col>
          <div className="card__title">
            <h5 className="bold-text">Details</h5>
          </div>
          <hr />
          <p />
          <h6 className="bold-text">Type:</h6>
          SAST
          <p />
          <h6 className="bold-text">Risk Rating:</h6>
          54.7
          <p />
          <h6 className="bold-text">Findings: 750</h6>
          <FindingsBar />
          <p />
          <h6 className="bold-text">Application:</h6>
          <span className="bold-text" style={{ color: 'green' }}>Partner Mobile App v2.14</span>
          <p />
          <h6 className="bold-text">Engagement:</h6>
          <span className="bold-text" style={{ color: 'green' }}>Merger Release</span>
          <p />
        </Col>
      </Row>
    </CardBody>
  </Card>
);

export default Summary;
