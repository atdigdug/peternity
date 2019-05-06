import React from 'react';
import {
  Col, Container, Row, Card, CardBody, UncontrolledTooltip, Breadcrumb, BreadcrumbItem, Button,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import EditIcon from 'mdi-react/EditIcon';
import Scan1 from './components/Scan1';
import Scan2 from './components/Scan2';
import Scan3 from './components/Scan3';
import Details from './components/Details';
import Findings from '../../AsfShared/FindingsTable';

const AppsModulesDetail = () => (
  <Container>
    <Row>
      <Breadcrumb>
        <BreadcrumbItem><a href="/engagements/detail">Merger Release</a></BreadcrumbItem>
        <BreadcrumbItem active>Partner Mobile App</BreadcrumbItem>
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
          <NavLink to="/engagements/input">
            <Button outline><EditIcon /> Edit Application</Button>
          </NavLink>
        </div>
      </Col>
    </Row>
    <Row>
      <Col xl="9">
        <Row>
          <Col>
            <Card>
              <CardBody>
                <Stepper activeStep={0}>
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
                <UncontrolledTooltip placement="bottom" target="tooltip3">
                  More detail about Onboard completion
                </UncontrolledTooltip>
              </CardBody>
            </Card>
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
          <Col xl="6">&nbsp;</Col>
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
