import React from 'react';
import { Container, Row } from 'reactstrap';
import NeutralAlertsWithIcons from './components/NeutralAlertsWithIcons';
import TopSellingProducts from './components/TopSellingProducts';
import InboxTable from './components/InboxTable';
import emails from './components/email-list';

const HomePage = () => (
  <Container className="dashboard">
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
