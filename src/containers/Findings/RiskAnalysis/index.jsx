import React from 'react';
import { Col, Container, Row, Button } from 'reactstrap';
import Table from './components/DataTable';
import RiskFilter from './components/RiskFilter';
import RuleFilter from './components/RuleFilter';

const ApplicationsDefault = () => (
  <Container>
    <Row>
      <Col md={12}>
        <h3 className="page-title">Findings</h3>
        <h3 className="page-subhead subhead">Risk Anlaysis</h3>
      </Col>
    </Row>
    <Row>
      <Col align="right">
        <Button color="primary" type="submit">Edit Template</Button>
        <Button color="primary" type="submit">Run Risk Analysis</Button>
      </Col>
    </Row>
    <Row>
      <Col xl="3"><Row><RiskFilter /></Row><Row><RuleFilter /></Row></Col>
      <Col xl="9"><Table /></Col>
    </Row>
  </Container>
);

export default ApplicationsDefault;
