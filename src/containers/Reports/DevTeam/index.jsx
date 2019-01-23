import React from 'react';
import { Container, Row } from 'reactstrap';

import Defects from './components/Defects';
import StaleDefects from './components/StaleDefects';
import DefectsList from './components/DefectsList';

const ReportAction = () => (
  <Container className="dashboard">
    <Row>
      <Defects />
      <StaleDefects />
    </Row>
    <Row>
      <DefectsList />
    </Row>
  </Container>
);

export default ReportAction;
