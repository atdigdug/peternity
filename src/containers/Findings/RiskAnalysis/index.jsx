import React from 'react';
import { Col, Container, Row, Card, CardBody, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import EngagementsAggregate from './components/EngagementsAggregate';
import Table from './components/DataTable';
import HorizontalForm from './components/HorizontalForm';

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
        <Card>
          <CardBody>
            <NavLink to="/findings/detail">
              <div className="card__title">
                <h5 className="bold-text">Finding 1234 / Scan 1 / App 1</h5>
              </div>
            </NavLink>
            <Row>
              <Col>
                <Card>
                  <CardBody>
                    <div className="card__title">
                      <h5 className="bold-text">Description</h5>
                    </div>
                    System displays an error message Eg: Unable to update the record.
                    But according to functionality system should update the updated record.
                    This particular defect occurs in version 9.2.
                    This particular defect also found in other modules.
                    Inconsistency of application while reproducing the defect.
                  </CardBody>
                </Card>
              </Col>
              <Col>
                <Card>
                  <CardBody>
                    <div className="card__title">
                      <h5 className="bold-text">Details</h5>
                    </div>
                    <Row>
                      <Col><HorizontalForm /></Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default ApplicationsDefault;
