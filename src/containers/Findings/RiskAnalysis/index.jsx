import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import Table from './components/DataTable';

const ApplicationsDefault = () => (
  <Container>
    <Row>
      <Col md={12}>
        <h3 className="page-title">Findings</h3>
        <h3 className="page-subhead subhead">Risk Anlaysis</h3>
      </Col>
    </Row>
    <Row>
      <Table />
    </Row>
  </Container>
);

export default ApplicationsDefault;
