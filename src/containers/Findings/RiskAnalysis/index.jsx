import React from 'react';
import {
  Col, Container, Row, Button, Card, CardBody,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import Table from './components/DataTable';
import RiskFilter from './components/RiskFilter';
import RuleFilter from './components/RuleFilter';
import ToolFilter from './components/ToolFilter';
import AssignedFilter from './components/AssignedFilter';
import HorizontalForm from './components/HorizontalForm';

const ApplicationsDefault = () => (
  <Container>
    <Row>
      <Col md={12}>
        <h3 className="page-title">Risks</h3>
        <h3 className="page-subhead subhead">Risk Anlaysis</h3>
      </Col>
    </Row>
    <Row>
      <Col align="right">
        <Button color="primary" type="submit">Edit Template</Button>
        <Button color="primary" type="submit">Run Risk Analysis</Button>
      </Col>
    </Row>
    <Row>
      <Col xl="3">
        <Row><RiskFilter /></Row>
        <Row><RuleFilter /></Row>
        <Row><ToolFilter /></Row>
        <Row><AssignedFilter /></Row>
      </Col>
      <Col xl="9"><Table /></Col>
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
