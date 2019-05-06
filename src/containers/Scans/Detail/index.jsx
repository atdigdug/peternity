import React from 'react';
import {
  Col, Container, Row, Card, CardBody, Breadcrumb, BreadcrumbItem, Progress,
} from 'reactstrap';
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
        <h3 className="page-title">Veracode Scan</h3>
        <h3 className="page-subhead subhead">#59102</h3>
      </Col>
    </Row>
    <Row>
      <Col xl="9">
        <Row>
          <Card>
            <CardBody>
              <div className="progress-wrap progress-wrap--middle">
                <Progress value={100} />
              </div>
              24 Feb 2019 3:54 PM
            </CardBody>
          </Card>
        </Row>
        <Row>
          <Findings />
        </Row>
      </Col>
      <Col xl="3">
        <Details />
      </Col>
    </Row>
  </Container>
);

export default AppsModulesDetail;
