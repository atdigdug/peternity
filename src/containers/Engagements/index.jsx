import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import NeutralAlertsWithIcons from './components/NeutralAlertsWithIcons';

const BasicForm = () => (
  <Container>
    <Row>
      <Col md={12}>
        <h3 className="page-title">Engagements</h3>
        <h3 className="page-subhead subhead">Summary</h3>
      </Col>
    </Row>
    <Row>
      <NeutralAlertsWithIcons />
    </Row>
  </Container>
);

export default BasicForm;
