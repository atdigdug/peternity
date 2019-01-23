import React from 'react';
import { Container, Row } from 'reactstrap';

import Findings from './components/Findings';
import RiskPriorities from './components/RiskPriorities';
import WindowOfExposure from './components/WindowOfExposure';
import WindowOfExposure24Months from './components/WindowOfExposure24Months';
import MissedSlo from './components/MissedSlo';
import AvgDaysMissedSlo from './components/AvgDaysMissedSlo';
import Top10Apps from './components/Top10Apps';
import Top10Vuln from './components/Top10Vuln';

const ReportAction = () => (
  <Container className="dashboard">
    <Row>
      <Findings />
      <RiskPriorities />
    </Row>
    <Row>
      <WindowOfExposure />
      <WindowOfExposure24Months />
      <MissedSlo />
      <AvgDaysMissedSlo />
    </Row>
    <Row>
      <Top10Apps />
      <Top10Vuln />
    </Row>
  </Container>
);

export default ReportAction;
