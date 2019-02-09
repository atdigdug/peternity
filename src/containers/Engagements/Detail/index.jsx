import React from 'react';
import { Col, Container, Row, Card, CardBody } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const EngagementsDetail = () => (
  <Container>
    <Row>
      <Col md={12}>
        <h3 className="page-title">Engagement 1 Details</h3>
        <h3 className="page-subhead subhead">Next step: This is what you have to do next.</h3>
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
          </CardBody>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col>
        <NavLink to="/appsmodules/detail">
          <Card>
            <CardBody>
              <div className="card__title">
                <h5 className="bold-text">App 1</h5>
              </div>
            </CardBody>
          </Card>
        </NavLink>
      </Col>
      <Col>
        <Card>
          <CardBody>
            <div className="card__title">
              <h5 className="bold-text">App 2</h5>
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
              <h5 className="bold-text">Aggregated Data</h5>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default EngagementsDetail;
