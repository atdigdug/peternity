import React from 'react';
import {
  Card, CardBody, Col, Table,
} from 'reactstrap';

const VipIssues = () => (
  <Col md={12} lg={12} xl={6}>
    <Card>
      <CardBody>
        <div className="card__title">
          <h5 className="bold-text">Unassigned Defects</h5>
          <h5 className="subhead">Requires dev team attention</h5>
        </div>
        <Table responsive hover>
          <thead>
            <tr>
              <th>Last Updated</th>
              <th>Assigned To</th>
              <th>App</th>
              <th>Defect</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1 week ago</td>
              <td>Asha</td>
              <td>Storage module</td>
              <td>null password</td>
            </tr>
            <tr>
              <td>3 days ago</td>
              <td>Bhageeta</td>
              <td>Indala app</td>
              <td>Outdated library</td>
            </tr>
            <tr>
              <td>Yesterday</td>
              <td>Bhageeta</td>
              <td>Emon website</td>
              <td>Cross-site scripting</td>
            </tr>
          </tbody>
        </Table>
      </CardBody>
    </Card>
  </Col>
);

export default VipIssues;
