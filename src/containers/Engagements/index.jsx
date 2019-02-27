import React from 'react';
import { Col, Container, Row, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import ListOfActiveEngagements from './components/ListOfActiveEngagements';
import EngagementsAggregate from './components/EngagementsAggregate';
import Table from './components/DataTable';

const EngagementDefault = () => (
  <Container>
    <Row>
      <Col md={12}>
        <h3 className="page-title">Engagements</h3>
        <h3 className="page-subhead subhead">Dashboard</h3>
      </Col>
    </Row>
    <Row>
      <Col>
        <NavLink to="/engagements/input">
          <Button color="primary" type="submit">New Engagement</Button>
        </NavLink>
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

export default EngagementDefault;
