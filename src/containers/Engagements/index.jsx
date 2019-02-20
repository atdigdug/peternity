import React from 'react';
import { Col, Container, Row, Button } from 'reactstrap';
import ListOfActiveEngagements from './components/ListOfActiveEngagements';
import NeutralAlertsWithIcons from './components/NeutralAlertsWithIcons';

const EngagementDefault = () => (
  <Container>
    <Row>
      <Col md={12}>
        <h3 className="page-title">Engagements</h3>
        <h3 className="page-subhead subhead">Summary</h3>
      </Col>
    </Row>
    <Row>
      <Col><Button color="primary" type="submit">New Engagement</Button></Col>
    </Row>
    <Row>
      <ListOfActiveEngagements />
    </Row>
    <Row>
      <NeutralAlertsWithIcons />
    </Row>
  </Container>
);

export default EngagementDefault;
