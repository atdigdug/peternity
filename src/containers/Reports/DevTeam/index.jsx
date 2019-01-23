import React from 'react';
import { Container, Row } from 'reactstrap';

import Score from './components/Score';

const ReportAction = () => (
  <Container className="dashboard">
    <Row>
      <Score />
    </Row>
  </Container>
);

export default ReportAction;
