import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import InboxTable from './components/InboxTable';
import emails from './components/email-list';

const HomePage = () => (
  <Container className="dashboard">
    <Row>
      <Col md={12}>
        <h3 className="page-title">Findings</h3>
      </Col>
    </Row>
    <Row>
      <InboxTable emails={emails} />
    </Row>
  </Container>
);

export default HomePage;
