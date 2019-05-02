import React from 'react';
import {
  Col, Container, Row, Button,
} from 'reactstrap';
import Tool1 from './components/Tool1';
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
      <Col><Tool1 /></Col>
      <Col><Tool1 /></Col>
    </Row>
    <Row>
      <Col><Tool1 /></Col>
      <Col><Tool1 /></Col>
    </Row>
    <Row>
      <Col><Tool1 /></Col>
      <Col>&nbsp;</Col>
    </Row>
    <Row>
      <Table />
    </Row>
  </Container>
);

export default ApplicationsDefault;
