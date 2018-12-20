import React from 'react';
import { Container, Row } from 'reactstrap';
import VipIssues from './components/VipIssues';
import WaitingForActionIssues from './components/WaitingForActionIssues';
import UnassignedDefects from './components/UnassignedDefects';
import IssuesMissingDetail from './components/IssuesMissingDetail';

const ReportAction = () => (
  <Container className="dashboard">
    <Row>
      <VipIssues />
      <WaitingForActionIssues />
      <UnassignedDefects />
      <IssuesMissingDetail />
    </Row>
  </Container>
);

export default ReportAction;
