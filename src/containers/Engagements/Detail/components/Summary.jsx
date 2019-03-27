/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
  Row, Col, Card, CardBody,
} from 'reactstrap';

const Summary = () => (
  <Card>
    <CardBody>
      <Row>
        <Col>
          Due Date:<p />
          7/27/2019<p />
          Consultant:<p />
          Bob<p />
          Risk rating:<p />
          Low (893)<p />
          Progress:<p />
        </Col>
        <Col>
          Findings risk:
        </Col>
      </Row>
    </CardBody>
  </Card>
);

export default Summary;
