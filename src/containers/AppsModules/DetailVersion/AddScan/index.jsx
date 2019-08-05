import React from 'react';
import {
  Col, Container, Row, Card, CardBody, Breadcrumb, BreadcrumbItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';

const AddScan = () => (
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
        <h3 className="page-title">Add Scan for Partner Mobile App</h3>
        <h3 className="page-subhead subhead">
          2.14 (for full version page, go to
          &nbsp;
          <Link to="/appsmodules/detail">
            <span className="bold-text">Partner Mobile App version 2.14 (latest)</span>
          </Link>
          )
        </h3>
      </Col>
    </Row>
    <Row>
      <Col xl="9">
        <Row>
          <Col>
            <Card>
              <CardBody>
                Suggested scans: <p />
                Coverity
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Col>
    </Row>
  </Container>
);

export default AddScan;
