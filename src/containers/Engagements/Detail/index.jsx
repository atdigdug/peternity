import React from 'react';
import { Col, Container, Row, Card, CardBody } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

const EngagementsDetail = () => (
  <Container>
    <Row>
      <Col md={12}>
        <h3 className="page-title">Engagement 1 Details</h3>
        <h3 className="page-subhead subhead">Next step: This is what you have to do next.</h3>
      </Col>
    </Row>
    <Row>
      <Col>
        <Card>
          <CardBody>
            <div className="card__title">
              <h5 className="bold-text">Status</h5>
            </div>
            <Stepper activeStep="0">
              <Step key="Intake" completed="true">
                <StepLabel>Intake</StepLabel>
              </Step>
              <Step key="Threat Model" completed="true">
                <StepLabel>Threat Model</StepLabel>
              </Step>
              <Step key="Onboard" completed="true">
                <StepLabel>Onboard</StepLabel>
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
          </CardBody>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col>
        <NavLink to="/appsmodules/detail">
          <Card>
            <CardBody>
              <div className="card__title">
                <h5 className="bold-text">App 1</h5>
              </div>
            </CardBody>
          </Card>
        </NavLink>
      </Col>
      <Col>
        <Card>
          <CardBody>
            <div className="card__title">
              <h5 className="bold-text">App 2</h5>
            </div>
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
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default EngagementsDetail;
