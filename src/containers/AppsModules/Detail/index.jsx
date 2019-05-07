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
import Alert from '../../AsfShared/ScanAlert';
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
        <h3 className="page-subhead subhead">latest version: 2.14 (2/22/2019)</h3>
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
            <Alert color="success" className="alert--colored" icon>
              <p>versions engaged...</p>
            </Alert>
          </Col>
        </Row>
        <p />
        <Row>
          <Col>
            <Card>
              <CardBody>
                <Stepper activeStep={0}>
                  <Step id="tooltip1" key="Intake" completed>
                    <StepLabel optional="30 Nov 2018">Intake</StepLabel>
                  </Step>
                </Stepper>
                <UncontrolledTooltip placement="bottom" target="tooltip1">
                  More detail about Intake completion
                </UncontrolledTooltip>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Version1 />
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <CardBody>
                <div className="card__title">
                  <h5 className="bold-text float-left">Older Versions</h5>
                  <h5 className="subhead">&nbsp;6</h5>
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
