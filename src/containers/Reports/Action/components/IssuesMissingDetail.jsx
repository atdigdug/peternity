import React from 'react';
import {
  Card, CardBody, Col, Table,
} from 'reactstrap';

const VipIssues = () => (
  <Col md={12} lg={12} xl={6}>
    <Card>
      <CardBody>
        <div className="card__title">
          <h5 className="bold-text">Issues Missing Detail</h5>
          <h5 className="subhead">Intake on hold</h5>
        </div>
        <Table responsive hover>
          <thead>
            <tr>
              <th>Last Updated</th>
              <th>Assigned To</th>
              <th>Issue</th>
              <th>Detail Needed</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1 month ago</td>
              <td>Chandra</td>
              <td>KSHV App Release</td>
              <td>No architecture details</td>
            </tr>
            <tr>
              <td>1 week ago</td>
              <td>Chandra</td>
              <td>react-notify-toast module update</td>
              <td>Description missing</td>
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

export default VipIssues;
