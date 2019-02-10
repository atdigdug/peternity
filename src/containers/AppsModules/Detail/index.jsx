import React from 'react';
import { Col, Container, Row, Card, CardBody } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { Breadcrumb } from 'react-bootstrap';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import HorizontalForm from './components/HorizontalForm';
import ArchitectureForm from './components/ArchitectureForm';
import RiskPriorities from './components/RiskPriorities';

const AppsModulesDetail = () => (
  <Container>
    <Row>
      <Col md={12}>
        <h3 className="page-title">App Details</h3>
        <h3 className="page-subhead subhead">Summary</h3>
      </Col>
    </Row>
    <Row>
      <Col>
        <Breadcrumb>
          <Breadcrumb.Item href="/engagements/detail">Engagement 1</Breadcrumb.Item>
          <Breadcrumb.Item active>Application 1</Breadcrumb.Item>
        </Breadcrumb>
      </Col>
    </Row>
    <Row>
      <Col>
        <Card>
          <CardBody>
            <Stepper activeStep="0">
              <Step key="Intake" completed="true">
                <StepLabel optional="1/1/2018">Intake</StepLabel>
              </Step>
              <Step key="Threat Model" completed="true">
                <StepLabel optional="2/1/2018">Threat Model</StepLabel>
              </Step>
              <Step key="Onboard" completed="true">
                <StepLabel optional="3/1/2018">Onboard</StepLabel>
              </Step>
              <Step key="Offboard" active="true">
                <StepLabel>Offboard</StepLabel>
              </Step>
              <Step key="Risk Model">
                <StepLabel>Risk Model</StepLabel>
              </Step>
            </Stepper>
          </CardBody>
        </Card>
      </Col>
    </Row>
    <Row>
      <HorizontalForm />
      <ArchitectureForm />
    </Row>
    <Row>
      <Col>
        <NavLink to="/scans/detail">
          <Card>
            <CardBody>
              <div className="card__title">
                <h5 className="bold-text">Scan 1</h5>
              </div>
              <RiskPriorities />
            </CardBody>
          </Card>
        </NavLink>
      </Col>
      <Col>
        <Card>
          <CardBody>
            <div className="card__title">
              <h5 className="bold-text">Scan 2</h5>
            </div>
            <RiskPriorities />
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
            <RiskPriorities />
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default AppsModulesDetail;
