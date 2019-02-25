import React from 'react';
import { Col, Container, Row, Card, CardBody, Button } from 'reactstrap';

const ScansDetail = () => (
  <Container>
    <Row>
      <Col md={12}>
        <h3 className="page-title">Connections</h3>
      </Col>
    </Row>
    <Row>
      <Col><Button color="primary" type="submit">Add Connection</Button></Col>
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
