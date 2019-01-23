import React from 'react';
import { Container, Row } from 'reactstrap';

import Score from './components/Score';
import WindowOfExposure24Months from './components/WindowOfExposure24Months';
import FindingsResolved24Months from './components/FindingsResolved24Months';

const ReportAction = () => (
  <Container className="dashboard">
    <Row>
      <Score />
    </Row>
    <Row>
      <WindowOfExposure24Months />
      <FindingsResolved24Months />
    </Row>
  </Container>
);

export default ReportAction;
