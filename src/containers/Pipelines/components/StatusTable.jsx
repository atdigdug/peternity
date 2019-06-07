import React from 'react';
import {
  Table, Card, CardBody, Row, Col,
} from 'reactstrap';
import { Link } from 'react-router-dom';

const EngagementDataTable = () => (
  <Row>
    <Col>
      <Card>
        <CardBody>
          <Table responsive hover className="table--bordered dashboard__audience-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Source</th>
                <th>Status</th>
                <th>App</th>
                <th>Tool</th>
                <th>Sken Suggestion</th>
                <th>Finding</th>
                <th>Time Taken</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <Link to="/pipelines/detail">
                  <td>Jenkins 2946</td>
                </Link>
                <td>Pending</td>
                <td>Partner Mobile App</td>
                <td>FxCop</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jenkins 2946</td>
                <td>Running</td>
                <td>Partner Mobile App</td>
                <td>Veracode</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Jenkins 2946</td>
                <td>Completed</td>
                <td>Partner Mobile App</td>
                <td>WhiteHat</td>
                <td>OK</td>
                <td>325</td>
                <td>2:43</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Jenkins 2946</td>
                <td>Error</td>
                <td>Partner Mobile App</td>
                <td>CheckMarx</td>
                <td>Fix Error</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Jenkins 9455</td>
                <td>Completed</td>
                <td>Customer Portal</td>
                <td>Veracode</td>
                <td>Investigate</td>
                <td>258</td>
                <td>3:29</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Jenkins 9156</td>
                <td>Completed</td>
                <td>Vendor Registration App</td>
                <td>FxCop</td>
                <td>Remediate</td>
                <td>694</td>
                <td>1:01</td>
              </tr>
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </Col>
  </Row>
);

export default EngagementDataTable;
