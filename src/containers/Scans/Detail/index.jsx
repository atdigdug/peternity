import React from 'react';
import { Col, Container, Row, Card, CardBody } from 'reactstrap';
import { Breadcrumb } from 'react-bootstrap';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import HorizontalForm from './components/HorizontalForm';
import HorizontalForm2 from './components/HorizontalForm2';
import RiskPriorities from './components/RiskPriorities';

const ScansDetail = () => (
  <Container>
    <Row>
      <Col md={12}>
        <h3 className="page-title">WhiteHat Scan Details</h3>
        <h3 className="page-subhead subhead">WhiteHat scan of Sonia App</h3>
      </Col>
    </Row>
    <Row>
      <Col>
        <Breadcrumb>
          <Breadcrumb.Item href="/engagements/detail">Annual Sale Launch Engagement</Breadcrumb.Item>
          <Breadcrumb.Item href="/appsmodules/detail">Sonia App</Breadcrumb.Item>
          <Breadcrumb.Item active>WhiteHat Scan</Breadcrumb.Item>
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
      <Col>
        <Card>
          <CardBody>
            <div className="card__title">
              <h5 className="bold-text">Details</h5>
            </div>
            <Row>
              <Col><HorizontalForm /></Col>
              <Col><HorizontalForm2 /></Col>
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
