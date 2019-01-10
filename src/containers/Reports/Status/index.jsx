import React from 'react';
import { Container, Row } from 'reactstrap';

import OpenIssues from './components/OpenIssues';
import Issues2bCompleted from './components/Issues2bCompleted';

const ReportAction = () => (
  <Container className="dashboard">
    <Row>
      <OpenIssues />
      <Issues2bCompleted />
    </Row>
  </Container>
);

export default ReportAction;
