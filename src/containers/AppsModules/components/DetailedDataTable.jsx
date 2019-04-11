import React from 'react';
import {
  Row, Col,
} from 'reactstrap';
import App1 from './App1';
import App2 from './App2';
import App3 from './App3';
import App4 from './App4';

const EngagementDataTable = () => (
  <div>
    <Row>
      <Col>
        <App1 />
      </Col>
      <Col>
        <App2 />
      </Col>
    </Row>
    <Row>
      <Col>
        <App3 />
      </Col>
      <Col>
        <App4 />
      </Col>
    </Row>
  </div>
);

export default EngagementDataTable;
