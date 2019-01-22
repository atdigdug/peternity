import React from 'react';
import { Container, Row } from 'reactstrap';

import OpenIssues from './components/OpenIssues';
import Issues2bCompleted from './components/Issues2bCompleted';
import IssuesByMonth from './components/IssuesByMonth';
import EffortPotential from './components/EffortPotential';

const ReportAction = () => (
  <Container className="dashboard">
    <Row>
      <OpenIssues />
      <Issues2bCompleted />
    </Row>
    <Row>
      <IssuesByMonth />
      <EffortPotential />
    </Row>
  </Container>
);

export default ReportAction;
