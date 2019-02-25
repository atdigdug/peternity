import React from 'react';
import { Col, Container, Row, Card, CardBody, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const logoWhitehat = `${process.env.PUBLIC_URL}/img/whitehat.png`;
const logoVeracode = `${process.env.PUBLIC_URL}/img/veracode.png`;

const logostyle = {
  left: 0,
  width: 100,
  lineHeight: '24px',
};

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
            <img style={logostyle} src={logoWhitehat} alt="" />
            <img style={logostyle} src={logoVeracode} alt="" />
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default ScansDetail;
