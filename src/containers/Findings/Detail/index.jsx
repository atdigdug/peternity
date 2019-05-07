import React from 'react';
import {
  Col, Container, Row, Card, CardBody, Breadcrumb, BreadcrumbItem,
} from 'reactstrap';

const ScansDetail = () => (
  <Container>
    <Row>
      <Breadcrumb>
        <BreadcrumbItem><a href="/appsmodules">Applications</a></BreadcrumbItem>
        <BreadcrumbItem><a href="/appsmodules/detail">Partner Mobile App</a></BreadcrumbItem>
        <BreadcrumbItem><a href="/appsmodules/detailversion">Version 2.14 (latest)</a></BreadcrumbItem>
        <BreadcrumbItem><a href="/scans/detail">Veracode Scan</a></BreadcrumbItem>
        <BreadcrumbItem active>Cross-site Scripting</BreadcrumbItem>
      </Breadcrumb>
    </Row>
    <Row>
      <Col md={12}>
        <h3 className="page-title">Cross-site Scripting (XSS)</h3>
        <h3 className="page-subhead subhead">#223256043</h3>
      </Col>
    </Row>
    <Row>
      <Col>
        <Card>
          <CardBody>
            <div className="card__title">
              <h5 className="bold-text">Details</h5>
            </div>
            <hr />
            <Row>
              <Col xl="4">
                <h6 className="bold-text">Assigned:</h6>
                Bob<p />
                <h6 className="bold-text">Risk:</h6>
                54.7<p />
                <h6 className="bold-text">Scan:</h6>
                Veracode Scan<p />
                <h6 className="bold-text">Application:</h6>
                Partner Mobile App v2.14<p />
                <h6 className="bold-text">Engagement:</h6>
                Merger Release<p />
              </Col>
              <Col xl="8">
                <h6 className="bold-text">Description:</h6>
                System displays an error message Eg: Unable to update the record.
                But according to functionality system should update the updated record.
                This particular defect occurs in version 9.2.
                This particular defect also found in other modules.
                Inconsistency of application while reproducing the defect.
              </Col>
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
