import React from 'react';
import { Col, Container, Row, Card, CardBody, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const ScansDetail = () => (
  <Container>
    <Row>
      <Col md={12}>
        <h3 className="page-title">Connections</h3>
      </Col>
    </Row>
    <Row>
      <Col>
        <NavLink to="/settings/connections/add">
          <Button color="primary" type="submit">Add Connection</Button>
        </NavLink>
      </Col>
    </Row>
    <Row>
      <Col>
        <Card>
          <CardBody>
            List of connections
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default ScansDetail;
