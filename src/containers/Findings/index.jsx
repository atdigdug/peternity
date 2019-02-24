import React from 'react';
import { Col, Container, Row, Card, CardBody, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import EngagementsAggregate from './components/EngagementsAggregate';
import Table from './components/DataTable';

const ApplicationsDefault = () => (
  <Container>
    <Row>
      <Col md={12}>
        <h3 className="page-title">Findings</h3>
        <h3 className="page-subhead subhead">Overview</h3>
      </Col>
    </Row>
    <Row>
      <Col xl="12">
        <Card>
          <CardBody>
            <form className="form">
              <div className="form__form-group">
                <Row>
                  <Col xl="2">
                    <div className="form__form-group-field">
                      <input />
                    </div>
                  </Col>
                  <Col xl="1">
                    <Button color="primary" type="submit">Search</Button>
                  </Col>
                </Row>
              </div>
            </form>
          </CardBody>
        </Card>
      </Col>
    </Row>
    <Row>
      <EngagementsAggregate />
    </Row>
    <Row>
      <Table />
    </Row>
    <Row>
      <Col xl="12">
        <NavLink to="/findings/detail">
          <Card>
            <CardBody>
              Finding 1
            </CardBody>
          </Card>
        </NavLink>
      </Col>
    </Row>
  </Container>
);

export default ApplicationsDefault;
