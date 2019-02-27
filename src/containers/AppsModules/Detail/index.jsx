import React from 'react';
import { Col, Container, Row, Card, CardBody, UncontrolledTooltip } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { Breadcrumb } from 'react-bootstrap';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import HorizontalForm from './components/HorizontalForm';
import ArchitectureForm from './components/ArchitectureForm';
import RiskPriorities from './components/RiskPriorities';
import Plots from './components/Plots';

const AppsModulesDetail = () => (
  <Container>
    <Row>
      <Col md={12}>
        <h3 className="page-title">Sonia App Details</h3>
        <h3 className="page-subhead subhead">Part of the Annual Sale Launch Engagement</h3>
      </Col>
    </Row>
    <Row>
      <Col>
        <Breadcrumb>
          <Breadcrumb.Item href="/engagements/detail">Annual Sale Launch Engagement</Breadcrumb.Item>
          <Breadcrumb.Item active>Sonia App</Breadcrumb.Item>
        </Breadcrumb>
      </Col>
    </Row>
    <Row>
      <Col>
        <Card>
          <CardBody>
            <Stepper activeStep="0">
              <Step id="tooltip1" key="Intake" completed="true">
                <StepLabel optional="1/1/2018">Intake</StepLabel>
              </Step>
              <Step id="tooltip2" key="Threat Model" completed="true">
                <StepLabel optional="2/1/2018">Threat Model</StepLabel>
              </Step>
              <Step id="tooltip3" key="Onboard" completed="true">
                <StepLabel optional="3/1/2018">Onboard</StepLabel>
              </Step>
              <Step key="Offboard" active="true">
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
      <HorizontalForm />
      <ArchitectureForm />
    </Row>
    <Row>
      <Col>
        <Card>
          <CardBody style={{ backgroundColor: '#add8e6' }}>
            <Row>
              <Col xl="3">
                <NavLink to="/scans/detail">
                  <Card>
                    <CardBody>
                      <div className="card__title">
                        <h5 className="bold-text">Whitehat Scan</h5>
                        <h5 className="subhead">DAST</h5>
                      </div>
                      <RiskPriorities />
                      Last run: 2018-02-01 19:07
                    </CardBody>
                  </Card>
                </NavLink>
              </Col>
              <Col xl="3">
                <Card>
                  <CardBody>
                    <div className="card__title">
                      <h5 className="bold-text">Nexus Scan</h5>
                      <h5 className="subhead">OSS</h5>
                    </div>
                    <RiskPriorities />
                    Last run: 2018-02-01 19:09
                  </CardBody>
                </Card>
              </Col>
              <Col xl="3">
                <NavLink to="/scans/input">
                  <Card>
                    <CardBody>
                      <h1 className="bold-text">+ Add Scan</h1>
                    </CardBody>
                  </Card>
                </NavLink>
              </Col>
            </Row>
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
          <CardBody style={{ backgroundColor: '#ffffe0' }}>
            <div className="card__title">
              <h5 className="bold-text">Aggregated Data</h5>
            </div>
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
                      <h5 className="bold-text">Findings By Scan</h5>
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

export default AppsModulesDetail;
