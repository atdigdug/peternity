import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import Defects from './components/RiskPriorities';
import StaleDefects from './components/StaleDefects';
import DefectsList from '../../AsfShared/FindingsTable';

const ReportAction = () => (
  <Container className="dashboard">
    <Row>
      <Defects />
      <StaleDefects />
    </Row>
    <Row>
      <Col>
        <DefectsList />
      </Col>
    </Row>
  </Container>
);

export default ReportAction;
