import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import ListOfActiveEngagements from './components/ListOfActiveEngagements';
import EngagementsAggregate from './components/EngagementsAggregate';
import Table from './components/DataTable';

const ApplicationsDefault = () => (
  <Container>
    <Row>
      <Col md={12}>
        <h3 className="page-title">Scans</h3>
        <h3 className="page-subhead subhead">Dashboard</h3>
      </Col>
    </Row>
    <Row>
      <ListOfActiveEngagements />
    </Row>
    <Row>
      <EngagementsAggregate />
    </Row>
    <Row>
      <Table />
    </Row>
  </Container>
);

export default ApplicationsDefault;
