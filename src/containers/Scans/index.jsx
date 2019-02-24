import React from 'react';
import { Col, Container, Row, Button } from 'reactstrap';
import ListOfActiveEngagements from './components/ListOfActiveEngagements';
import EngagementsAggregate from './components/EngagementsAggregate';
import Table from './components/DataTable';

const ApplicationsDefault = () => (
  <Container>
    <Row>
      <Col md={12}>
        <h3 className="page-title">Applications and Modules</h3>
        <h3 className="page-subhead subhead">Dashboard</h3>
      </Col>
    </Row>
    <Row>
      <Col><Button color="primary" type="submit">New Application</Button></Col>
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
