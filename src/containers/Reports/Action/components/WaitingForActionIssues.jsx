import React from 'react';
import {
  Card, CardBody, Col, Table,
} from 'reactstrap';

const WaitingForActionIssues = () => (
  <Col md={12} lg={12} xl={6}>
    <Card>
      <CardBody>
        <div className="card__title">
          <h5 className="bold-text">Waiting For Action</h5>
          <h5 className="subhead">Issues that need attention</h5>
        </div>
        <Table responsive hover>
          <thead>
            <tr>
              <th>Last Updated</th>
              <th>Assigned To</th>
              <th>Issue</th>
              <th>Pending Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>3 weeks ago</td>
              <td>Asha</td>
              <td>Customer Portal</td>
              <td>Awaiting architecture review</td>
            </tr>
            <tr>
              <td>1 week ago</td>
              <td>Asha</td>
              <td>Storage module</td>
              <td>null password</td>
            </tr>
            <tr>
              <td>Yesterday</td>
              <td>Chandra</td>
              <td>New Year Launch</td>
              <td>No apps assigned</td>
            </tr>
          </tbody>
        </Table>
      </CardBody>
    </Card>
  </Col>
);

export default WaitingForActionIssues;
