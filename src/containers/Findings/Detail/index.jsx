import React from 'react';
import { Col, Container, Row, Card, CardBody, Button } from 'reactstrap';
import { Breadcrumb } from 'react-bootstrap';
import HorizontalForm from './components/HorizontalForm';

const ScansDetail = () => (
  <Container>
    <Row>
      <Col md={12}>
        <h3 className="page-title">Finding 1234</h3>
        <h3 className="page-subhead subhead">From WhiteHat scan of Sonia App</h3>
      </Col>
    </Row>
    <Row>
      <Col>
        <Breadcrumb>
          <Breadcrumb.Item href="/engagements/detail">Annual Sale Launch Engagement</Breadcrumb.Item>
          <Breadcrumb.Item href="/appsmodules/detail">Sonia App</Breadcrumb.Item>
          <Breadcrumb.Item href="/scans/detail">WhiteHat Scan</Breadcrumb.Item>
          <Breadcrumb.Item active>Finding 1234</Breadcrumb.Item>
        </Breadcrumb>
      </Col>
    </Row>
    <Row>
      <Col xl="12">
        <Card>
          <CardBody>
            <form className="form">
              <div className="form__form-group">
                <Button color="primary" type="submit">Action 1</Button>
                <Button color="primary" type="submit">Action 2</Button>
                <Button color="primary" type="submit">Action 3</Button>
              </div>
            </form>
          </CardBody>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col>
        <Card>
          <CardBody>
            <div className="card__title">
              <h5 className="bold-text">Description</h5>
            </div>
            System displays an error message Eg: Unable to update the record.
            But according to functionality system should update the updated record.
            This particular defect occurs in version 9.2.
            This particular defect also found in other modules.
            Inconsistency of application while reproducing the defect.
          </CardBody>
        </Card>
      </Col>
      <Col>
        <Card>
          <CardBody>
            <div className="card__title">
              <h5 className="bold-text">Details</h5>
            </div>
            <Row>
              <Col><HorizontalForm /></Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col>
        <Card>
          <CardBody>
            <div className="card__title">
              <h5 className="bold-text">Conversation</h5>
            </div>
            Mom: Hi hon, how was your day?<p />
            Tasha: Fine.<p />
            Mom: Have you started on your homework yet?<p />
            Tasha: Sort of…but this show is almost over….<p />
            Mom: OK, you can finish the show, but you really need to get started as soon as the show is over.
            I don’t want you staying up until midnight like you did last night.<p />
            Tasha: Fine.
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default ScansDetail;
