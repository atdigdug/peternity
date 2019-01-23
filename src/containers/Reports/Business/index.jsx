import React from 'react';
import { Container, Row } from 'reactstrap';

import Findings from './components/Findings';
import RiskPriorities from './components/RiskPriorities';

const ReportAction = () => (
  <Container className="dashboard">
    <Row>
      <Findings />
      <RiskPriorities />
    </Row>
  </Container>
);

export default ReportAction;
