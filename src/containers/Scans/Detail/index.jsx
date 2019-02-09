import React from 'react';
import { Col, Container, Row, Card, CardBody } from 'reactstrap';
import HorizontalForm from './components/HorizontalForm';
import RiskPriorities from './components/RiskPriorities';

const ScansDetail = () => (
  <Container>
    <Row>
      <Col md={12}>
        <h3 className="page-title">Scan Details</h3>
        <h3 className="page-subhead subhead">Summary</h3>
      </Col>
    </Row>
    <Row>
      <Col>
        <Card>
          <CardBody>
            <div className="card__title">
              <h5 className="bold-text">Breadcrumbs</h5>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col>
        <Card>
          <CardBody>
            <div className="card__title">
              <h5 className="bold-text">Status</h5>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col>
        <Card>
          <CardBody>
            <div className="card__title">
              <h5 className="bold-text">Details</h5>
            </div>
            <Row>
              <Col><HorizontalForm /></Col>
              <Col><HorizontalForm /></Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col>
        <Card>
          <CardBody>
            <RiskPriorities />
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default ScansDetail;
