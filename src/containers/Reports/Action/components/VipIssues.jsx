import React from 'react';
import { Card, CardBody, Col, Table } from 'reactstrap';

const VipIssues = () => (
  <Col md={12} lg={12} xl={6}>
    <Card>
      <CardBody>
        <div className="card__title">
          <h5 className="bold-text">Important Issues</h5>
          <h5 className="subhead">Use default table</h5>
        </div>
        <Table responsive hover>
          <thead>
            <tr>
              <th>Last Updated</th>
              <th>Opened</th>
              <th>Assigned To</th>
              <th>Issue</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>3 days ago</td>
              <td>5 days ago</td>
              <td>Asha</td>
              <td>Opera Browser Exploit</td>
            </tr>
            <tr>
              <td>Yesterday</td>
              <td>2 months ago</td>
              <td>Bhageeta</td>
              <td>Annual Sale Launch</td>
            </tr>
            <tr>
              <td>Today</td>
              <td>1 month ago</td>
              <td>Chandra</td>
              <td>Avantika App Scan</td>
            </tr>
          </tbody>
        </Table>
      </CardBody>
    </Card>
  </Col>
);

export default VipIssues;
