import React, { PureComponent } from 'react';
import {
  Col, Container, Row, Card, CardBody, Breadcrumb, BreadcrumbItem, Button, Table,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import ScanDetails from './components/HorizontalForm';

export default class AddScan extends PureComponent {
  constructor() {
    super();
    this.state = { showDetails: false };
  }

  render() {
    let detailPane;

    if (this.state.showDetails) {
      detailPane = <ScanDetails />;
    } else {
      detailPane = <p />;
    }

    return (
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
          <Col>
            <Card>
              <CardBody>
                Suggested scans: <p />
                <p />
                <Table responsive hover className="table--bordered dashboard__audience-table">
                  <thead>
                    <tr>
                      <th>Scanner</th>
                      <th>Recommendation</th>
                      <th>Reason</th>
                      <th>Type</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Coverity</td>
                      <td>Recommended</td>
                      <td>Apps similar to this regularly get scanned by Coverity.</td>
                      <td>Premium</td>
                      <td>
                        <Button
                          className="icon"
                          onClick={() => this.setState(prevState => ({ showDetails: !prevState.showDetails }))}
                        >
                          Select
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>Blackduck</td>
                      <td>Optional</td>
                      <td>You do not have an OSS and License Compliance scanner running for this project.
                        Apps similar to this do not normally get scanned by Blackduck.
                      </td>
                      <td>Free</td>
                      <td>
                        <Button
                          className="icon"
                        >
                          Select
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>Contrast</td>
                      <td>Not Recommended</td>
                      <td>Apps similar to this do not normally get scanned by Contrast.</td>
                      <td>Premium</td>
                      <td>
                        <Button
                          className="icon"
                        >
                          Select
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>Brakeman</td>
                      <td>Not Recommended</td>
                      <td>Your project is not written in Ruby.</td>
                      <td>Free</td>
                      <td>
                        <Button
                          className="icon"
                        >
                          Select
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            {detailPane}
          </Col>
        </Row>
      </Container>
    );
  }
}
