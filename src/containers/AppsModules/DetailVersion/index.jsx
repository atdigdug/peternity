import React from 'react';
import {
  Col, Container, Row, Card, CardBody, UncontrolledTooltip, Breadcrumb, BreadcrumbItem, Button,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import EditIcon from 'mdi-react/EditIcon';
import HistoryIcon from 'mdi-react/HistoryIcon';
import Scan1 from './components/Scan1';
import Version1 from './components/Version1';
import Version2 from './components/Version2';
import Version3 from './components/Version3';
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
          2.14 (for full version page, go to Partner Mobile App version 2.14 (latest))
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
          <Col>
            <Scan1 />
          </Col>
          <Col>
            <Version1 />
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <CardBody>
                <div className="card__title">
                  <h5 className="bold-text">Older Versions</h5>
                  6
                </div>
                <hr />
                <Row><Col><Version2 /></Col></Row>
                <hr />
                <Row><Col><Version3 /></Col></Row>
                <hr />
                <Button outline><HistoryIcon />Load older</Button>
              </CardBody>
            </Card>
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
