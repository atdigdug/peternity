import React from 'react';
import {
  Col, Container, Row, Card, CardBody, UncontrolledTooltip, Breadcrumb, BreadcrumbItem, Button,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import {
  Stepper, Step, StepLabel, StepButton,
} from '@material-ui/core';
import EditIcon from 'mdi-react/EditIcon';
import UsesApp1 from './components/UsesApp1';
import UsesApp2 from './components/UsesApp2';
import Scan1 from './components/Scan1';
import Scan2 from './components/Scan2';
import Scan3 from './components/Scan3';
import ManualFindings from './components/ManualScan4';
import Details from './components/Details';
import Findings from '../../AsfShared/FindingsTable';

const AppsModulesDetail = () => (
  <Container>
    <Row>
      <Breadcrumb>
        <BreadcrumbItem><a href="/engagements">Engagements</a></BreadcrumbItem>
        <BreadcrumbItem><a href="/engagements/detail">Merger Release</a></BreadcrumbItem>
        <BreadcrumbItem active>Partner Mobile App v2.14</BreadcrumbItem>
      </Breadcrumb>
    </Row>
    <Row>
      <Col>
        <h3 className="page-title">Partner Mobile App</h3>
        <h3 className="page-subhead subhead">
          2.14 (for full version page, go to
          &nbsp;
          <NavLink to="/appsmodules/detail">
            <span className="bold-text">Partner Mobile App version 2.14 (latest)</span>
          </NavLink>
          )
        </h3>
      </Col>
      <Col>
        <div className="float-right">
          <Button color="success">+ Manual Finding</Button>
          <Button color="success">+ Scan</Button>
          <Button outline><EditIcon /> Edit</Button>
        </div>
      </Col>
    </Row>
    <Row>
      <Col xl="9">
        <Row>
          <Col>
            <Card>
              <CardBody>
                <Stepper nonLinear activeStep={5} alternativeLabel>
                  <Step id="tooltip3" key="Onboard" completed>
                    <StepButton optional="3/1/2019">
                      Onboard
                    </StepButton>
                  </Step>
                  <Step key="InitRv" active>
                    <StepLabel>Initiative Review</StepLabel>
                  </Step>
                  <Step key="ArchRv">
                    <StepLabel>Architecture Review</StepLabel>
                  </Step>
                  <Step key="ConfigRv">
                    <StepLabel>Configuration Review</StepLabel>
                  </Step>
                  <Step key="CodeRv">
                    <StepLabel error>Code Review</StepLabel>
                  </Step>
                  <Step key="Pentest" active>
                    <StepLabel>Pentest</StepLabel>
                  </Step>
                  <Step key="VulnAss">
                    <StepLabel>Vulnerability Assessment</StepLabel>
                  </Step>
                  <Step key="DeployRv">
                    <StepLabel>Deployment Review</StepLabel>
                  </Step>
                </Stepper>
                <UncontrolledTooltip placement="bottom" target="tooltip3">
                  More detail about Onboard completion
                </UncontrolledTooltip>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xl="6">
            <UsesApp1 />
          </Col>
          <Col xl="6">
            <UsesApp2 />
          </Col>
        </Row>
        <Row>
          <Col xl="6">
            <Scan1 />
          </Col>
          <Col xl="6">
            <Scan2 />
          </Col>
        </Row>
        <Row>
          <Col xl="6">
            <Scan3 />
          </Col>
          <Col xl="6">
            <ManualFindings />
          </Col>
        </Row>
      </Col>
      <Col xl="3">
        <Details />
      </Col>
    </Row>
    <Row>
      <Col>
        <Findings />
      </Col>
    </Row>
  </Container>
);

export default AppsModulesDetail;
