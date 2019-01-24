import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import NeutralAlertsWithIcons from './components/NeutralAlertsWithIcons';
import TopSellingProducts from './components/TopSellingProducts';
import InboxTable from './components/InboxTable';
import emails from './components/email-list';

const HomePage = () => (
  <Container className="dashboard">
    <Row>
      <Col md={12}>
        <h3 className="page-title">Home</h3>
      </Col>
    </Row>
    <Row>
      <NeutralAlertsWithIcons />
    </Row>
    <Row>
      <TopSellingProducts />
      <InboxTable emails={emails} />
    </Row>
  </Container>
);

export default HomePage;
