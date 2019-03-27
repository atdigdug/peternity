import React from 'react';
import {
  Col, Container, Row, Card, CardBody, UncontrolledTooltip, Breadcrumb, BreadcrumbItem, Button,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import HorizontalForm from './components/HorizontalForm';
import HorizontalForm2 from './components/HorizontalForm2';
import RiskPriorities from './components/RiskPriorities';
import Summary from './components/Summary';
import App1 from './components/App1';

const EngagementsDetail = () => (
  <Container>
    <Row>
      <Breadcrumb>
        <BreadcrumbItem><a href="/engagements">Engagements</a></BreadcrumbItem>
        <BreadcrumbItem active>Merger Release</BreadcrumbItem>
      </Breadcrumb>
    </Row>
    <Row>
      <Col>
        <h3 className="page-title">Merger Release</h3>
        <h3 className="page-subhead subhead">6752</h3>
      </Col>
      <Col>
        <div className="float-right">
          <NavLink to="/engagements/input">
            <Button color="success">+ Add Application</Button>
          </NavLink>
          <NavLink to="/engagements/input">
            <Button outline>Edit Application</Button>
          </NavLink>
        </div>
      </Col>
    </Row>

    <Row>
      <Col xl="8">
        <Row>
          <Col>
            <Summary />
          </Col>
        </Row>
        Applications
        <Row>
          <Col xl="6">
            <App1 />
          </Col>
          <Col xl="6">
            <App1 />
          </Col>
        </Row>
        <Row>
          <Col xl="6">
            <App1 />
          </Col>
        </Row>
      </Col>
      <Col xl="4">
        <Card>
          <CardBody>
            Add to favorites
          </CardBody>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col>
        <Card>
          <CardBody>
            Findings
          </CardBody>
        </Card>
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
          <CardBody style={{ backgroundColor: '#add8e6' }}>
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
                <NavLink to="/appsmodules/input">
                  <Card>
                    <CardBody>
                      <h1 className="bold-text">+ Add App</h1>
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
