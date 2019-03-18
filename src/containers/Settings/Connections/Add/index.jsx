import React from 'react';
import {
  Col, Container, Row, Card, CardBody,
} from 'reactstrap';

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
        <h3 className="page-title">Available Connections</h3>
      </Col>
    </Row>
    <Row>
      <Col>
        <Card>
          <CardBody>
            <div className="card__title">
              <h5 className="bold-text">Platform</h5>
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
              <h5 className="bold-text">Scanners</h5>
            </div>
            <img style={logostyle} src={logoWhitehat} alt="" />
            <img style={logostyle} src={logoVeracode} alt="" />
          </CardBody>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col>
        <Card>
          <CardBody>
            <div className="card__title">
              <h5 className="bold-text">CI/CD</h5>
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
              <h5 className="bold-text">Developer Tools</h5>
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
              <h5 className="bold-text">Communication</h5>
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
              <h5 className="bold-text">CMDB</h5>
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
              <h5 className="bold-text">GRC</h5>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default ScansDetail;
