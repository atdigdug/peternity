import React from 'react';
import {
  Col, Container, Row, Card, CardBody, UncontrolledTooltip, Breadcrumb, BreadcrumbItem,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import HorizontalForm from './components/HorizontalForm';
import HorizontalForm2 from './components/HorizontalForm2';
import RiskPriorities from './components/RiskPriorities';
import Plots from './components/Plots';

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
          <BreadcrumbItem><a href="/engagements/detail">Annual Sale Launch Engagement</a></BreadcrumbItem>
          <BreadcrumbItem><a href="/appsmodules/detail">Sonia App</a></BreadcrumbItem>
          <BreadcrumbItem active>WhiteHat Scan</BreadcrumbItem>
        </Breadcrumb>
      </Col>
    </Row>
    <Row>
      <Col>
        <Card>
          <CardBody>
            <Stepper activeStep={0}>
              <Step id="tooltip1" key="Intake" completed>
                <StepLabel optional="1/1/2018">Intake</StepLabel>
              </Step>
              <Step id="tooltip2" key="Threat Model" completed>
                <StepLabel optional="2/1/2018">Threat Model</StepLabel>
              </Step>
              <Step id="tooltip3" key="Onboard" completed>
                <StepLabel optional="3/1/2018">Onboard</StepLabel>
              </Step>
              <Step key="Offboard" active>
                <StepLabel>Offboard</StepLabel>
              </Step>
              <Step key="Risk Model">
                <StepLabel>Risk Model</StepLabel>
              </Step>
            </Stepper>
            <UncontrolledTooltip placement="bottom" target="tooltip1">
              More detail about Intake completion
            </UncontrolledTooltip>
            <UncontrolledTooltip placement="bottom" target="tooltip2">
              More detail about Threat Model completion
            </UncontrolledTooltip>
            <UncontrolledTooltip placement="bottom" target="tooltip3">
              More detail about Onboard completion
            </UncontrolledTooltip>
          </CardBody>
        </Card>
      </Col>
    </Row>
    <Row>
      <Plots />
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
          <CardBody style={{ backgroundColor: '#ffffe0' }}>
            <NavLink to="/findings">
              <div className="card__title">
                <h5 className="bold-text">Findings</h5>
              </div>
            </NavLink>
            <Row>
              <Col xl="4">
                <Card>
                  <CardBody>
                    <div className="card__title">
                      <h5 className="bold-text">Findings By Status</h5>
                    </div>
                    <RiskPriorities />
                  </CardBody>
                </Card>
              </Col>
              <Col xl="4">
                <Card>
                  <CardBody>
                    <div className="card__title">
                      <h5 className="bold-text">Active Findings By Priority</h5>
                    </div>
                    <RiskPriorities />
                  </CardBody>
                </Card>
              </Col>
              <Col xl="4">
                <Card>
                  <CardBody>
                    <div className="card__title">
                      <h5 className="bold-text">Findings By Category</h5>
                    </div>
                    <RiskPriorities />
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

export default ScansDetail;
