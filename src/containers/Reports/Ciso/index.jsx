import React from 'react';
import { Container, Row } from 'reactstrap';

import Findings from './components/Findings';
import RiskPriorities from './components/RiskPriorities';
import WindowOfExposure from './components/WindowOfExposure';
import WindowOfExposure24Months from './components/WindowOfExposure24Months';
import MissedSlo from './components/MissedSlo';
import AvgDaysMissedSlo from './components/AvgDaysMissedSlo';
import SuccessChart from './components/SuccessChart';
import FailureChart from './components/FailureChart';
import EngagementsByMonth from './components/EngagementsByMonth';
import EngagementsByConsultant from './components/EngagementsByConsultant';
import EngagementsByPhase from './components/EngagementsByPhase';

const ReportAction = () => (
  <Container className="dashboard">
    <Row>
      <WindowOfExposure />
      <WindowOfExposure24Months />
      <MissedSlo />
      <AvgDaysMissedSlo />
    </Row>
    <Row>
      <SuccessChart />
      <FailureChart />
    </Row>
    <Row>
      <EngagementsByMonth />
      <EngagementsByConsultant />
      <EngagementsByPhase />
    </Row>
    <Row>
      <Findings />
      <RiskPriorities />
    </Row>
  </Container>
);

export default ReportAction;
