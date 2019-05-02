import React from 'react';
import {
  Col, Container, Row, Button,
} from 'reactstrap';
import ListOfActiveEngagements from './components/ListOfActiveEngagements';
import EngagementsAggregate from './components/EngagementsAggregate';
import Table from './components/DataTable';

const ApplicationsDefault = () => (
  <Container>
    <Row>
      <Col>
        <h3 className="page-title">Scanning tools</h3>
        <h3 className="page-subhead subhead">
          5 items
        </h3>
      </Col>
      <Col>
        <div className="float-right">
          <Button color="success">+ New tool</Button>
        </div>
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
