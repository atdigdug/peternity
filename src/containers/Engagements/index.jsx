import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import EngagementsAggregate from './components/EngagementsAggregate';
import Table from './components/NewDataTable';

const EngagementDefault = () => (
  <Container>
    <Row>
      <Col md={12}>
        <h3 className="page-title">Engagements</h3>
        <h3 className="page-subhead subhead">
          Active 54 &nbsp;&nbsp;&nbsp; Closed 392 &nbsp;&nbsp;&nbsp; Favorites Only 13
        </h3>
      </Col>
    </Row>
    <Row>
      <EngagementsAggregate />
    </Row>
    <Row>
      <Col xl="12">
        <Table />
      </Col>
    </Row>
  </Container>
);

export default EngagementDefault;
