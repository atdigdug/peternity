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
                <p />
                Coverity (Recommended) Apps similar to this regularly get scanned by Coverity. (Premium scanner) <p />
                Blackduck (Optional) You do not have an OSS and License Compliance scanner running for this project.
                  Apps similar to this do not normally get scanned by Blackduck. (Free scanner) <p />
                Contrast (Not Recommended) Apps similar to this do not normally get scanned by Contrast.
                  (Premium scanner) <p />
                Brakeman (Not Recommended) Your project is not written in Ruby. <p />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Col>
    </Row>
    <Row>
      <Col xl="9">
        <Row>
          <Col>
            <Card>
              <CardBody>
                Coverity: <p />
                <p />
                Coverity instance: <p />
                Coverity project: <p />
                Coverity stream: <p />
                Check for issues <p />
                Customize change set <p />
                Custom Coverity commands: command1, command2<p />
                On command failure: <p />
                  Skip any remaining commands <p />
                  Continue executing any remaining commands <p />
                On successful execution: <p />
                  Persist the intermediate directory <p />
                  Clean up the intermediate directory <p />
                <p />
                Suggested schedule: <p />
                  H H 1,15 1-11 * <p />
                  (This schedule was suggested based off similar scans by similar apps.)
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Col>
    </Row>
  </Container>
);

export default AddScan;
