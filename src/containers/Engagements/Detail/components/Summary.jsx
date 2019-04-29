/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
  Row, Col, Card, CardBody, Progress,
} from 'reactstrap';
import StatusIcon from 'mdi-react/RotateRightIcon';

const Summary = () => (
  <Card>
    <CardBody>
      <Row>
        <Col>
          <div className="progress-wrap progress-wrap--middle">
            <Progress value={80} />
          </div>
          <p />
          <StatusIcon />In progress
        </Col>
      </Row>
    </CardBody>
  </Card>
);

export default Summary;
