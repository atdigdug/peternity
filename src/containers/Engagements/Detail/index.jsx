import React from 'react';
import { Col, Container, Row, Card, CardBody, UncontrolledTooltip } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { Breadcrumb } from 'react-bootstrap';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import HorizontalForm from './components/HorizontalForm';
import HorizontalForm2 from './components/HorizontalForm2';
import RiskPriorities from './components/RiskPriorities';

const EngagementsDetail = () => (
  <Container>
    <Row>
      <Col md={12}>
        <h3 className="page-title">Annual Sale Launch Engagement Details</h3>
        <h3 className="page-subhead subhead">Next step: This is what you have to do next.</h3>
      </Col>
    </Row>
    <Row>
      <Col>
        <Card>
          <CardBody>
            <Breadcrumb>
              <Breadcrumb.Item href="/engagements">Organization 1</Breadcrumb.Item>
              <Breadcrumb.Item active>Annual Sale Launch Engagement</Breadcrumb.Item>
            </Breadcrumb>
          </CardBody>
        </Card>
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
      <Col xl="3">
        <NavLink to="/appsmodules/detail">
          <Card>
            <CardBody>
              <div className="card__title">
                <h5 className="bold-text">Sonia App</h5>
              </div>
              <RiskPriorities />
            </CardBody>
          </Card>
        </NavLink>
      </Col>
      <Col xl="3">
        <Card>
          <CardBody>
            <div className="card__title">
              <h5 className="bold-text">Customer Portal</h5>
            </div>
            <RiskPriorities />
          </CardBody>
        </Card>
      </Col>
      <Col xl="3">
        <Card>
          <CardBody>
            <div className="card__title">
              <h5 className="bold-text">App 3</h5>
            </div>
            <RiskPriorities />
          </CardBody>
        </Card>
      </Col>
      <Col xl="3">
        <Card>
          <CardBody>
            <h1 className="bold-text">+ Add App</h1>
          </CardBody>
        </Card>
      </Col>
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
                      <h5 className="bold-text">Findings By App</h5>
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

export default EngagementsDetail;
