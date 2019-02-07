import React from 'react';
import { Col, Container, Row, Card, CardBody } from 'reactstrap';

const EngagementsDetail = () => (
  <Container>
    <Row>
      <Col md={12}>
        <h3 className="page-title">Engagement Detail</h3>
        <h3 className="page-subhead subhead">Summary</h3>
      </Col>
    </Row>
    <Row>
      <Col>
        <Card>
          <CardBody>
            <div className="card__title">
              <h5 className="bold-text">Active Engagements</h5>
            </div>
            <div>
              <ul>
                <li>Engagment 1</li>
                <li>Engagment 2</li>
                <li>Engagment 3</li>
              </ul>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default EngagementsDetail;
