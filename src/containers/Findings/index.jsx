import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import ChatCard from './components/ChatCard';

const Chat = () => (
  <Container>
    <Row>
      <Col md={12}>
        <h3 className="page-title">Findings</h3>
      </Col>
    </Row>
    <Row>
      <ChatCard />
    </Row>
  </Container>
);

export default Chat;
