import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import HorizontalForm from './components/HorizontalForm';
import showResults from '../Show';

const BasicForm = () => (
  <Container>
    <Row>
      <Col md={12}>
        <h3 className="page-title">Scans</h3>
        <h3 className="page-subhead subhead">Scan details</h3>
      </Col>
    </Row>
    <Row>
      <HorizontalForm onSubmit={showResults} />
    </Row>
  </Container>
);

export default BasicForm;
