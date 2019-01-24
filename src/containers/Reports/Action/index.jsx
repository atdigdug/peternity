import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import VipIssues from './components/VipIssues';
import WaitingForActionIssues from './components/WaitingForActionIssues';
import UnassignedDefects from './components/UnassignedDefects';
import IssuesMissingDetail from './components/IssuesMissingDetail';

const ReportAction = () => (
  <Container className="dashboard">
    <Row>
      <Col md={12}>
        <h3 className="page-title">Action Report</h3>
      </Col>
    </Row>
    <Row>
      <VipIssues />
      <WaitingForActionIssues />
      <UnassignedDefects />
      <IssuesMissingDetail />
    </Row>
  </Container>
);

export default ReportAction;
