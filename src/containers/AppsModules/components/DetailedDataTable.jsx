import React from 'react';
import {
  Row, Col,
} from 'reactstrap';
import App1 from './App1';

const EngagementDataTable = () => (
  <div>
    <Row>
      <Col>
        <App1 />
      </Col>
      <Col>
        <App1 />
      </Col>
    </Row>
    <Row>
      <Col>
        <App1 />
      </Col>
      <Col>
        <App1 />
      </Col>
    </Row>
  </div>
);

export default EngagementDataTable;
