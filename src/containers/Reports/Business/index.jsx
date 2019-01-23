import React from 'react';
import { Container, Row } from 'reactstrap';

import Findings from './components/Findings';

const ReportAction = () => (
  <Container className="dashboard">
    <Row>
      <Findings />
    </Row>
  </Container>
);

export default ReportAction;
