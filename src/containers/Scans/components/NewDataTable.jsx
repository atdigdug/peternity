import React from 'react';
import {
  Progress, Table, Card, CardBody,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

const ScanDataTable = () => (
  <Card>
    <CardBody>
      <Table responsive hover className="table--bordered dashboard__audience-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tool</th>
            <th>Engagement</th>
            <th>Application</th>
            <th>Progress</th>
            <th>Findings</th>
            <th>Risk Rating</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>22325</td>
            <NavLink to="/engagements/detail">
              <td>Whitehat (SAST)</td>
            </NavLink>
            <td>Merger Release</td>
            <td>Customer Portal</td>
            <td>
              <div className="progress-wrap progress-wrap--middle">
                <Progress value={70} />
              </div>
            </td>
            <td>345</td>
            <td>TBD</td>
          </tr>
          <tr>
            <td>28523</td>
            <td>Whitehat (SAST)</td>
            <td>Merger Release</td>
            <td>Partner Mobile App</td>
            <td>
              <div className="progress-wrap progress-wrap--middle">
                <Progress value={30} />
              </div>
            </td>
            <td>750</td>
            <td>TBD</td>
          </tr>
          <tr>
            <td>69432</td>
            <td>Whitehat (DAST)</td>
            <td>CRM Update</td>
            <td>Partner Mobile App</td>
            <td>
              <div className="progress-wrap progress-wrap--middle progress-wrap--blue">
                <Progress value={100} />
              </div>
            </td>
            <td>878</td>
            <td><span style={{ color: 'lightgreen' }}>92.0</span></td>
          </tr>
          <tr>
            <td>34921</td>
            <td>Veracode (SAST)</td>
            <td>Merger Release</td>
            <td>Vendor Registration App</td>
            <td>
              <div className="progress-wrap progress-wrap--middle progress-wrap--blue">
                <Progress value={100} />
              </div>
            </td>
            <td>2031</td>
            <td><span style={{ color: 'red' }}>23.7</span></td>
          </tr>
          <tr>
            <td>32969</td>
            <td>CheckMarx (SCA)</td>
            <td>CRM Update</td>
            <td>Vendor Registration App</td>
            <td>
              <div className="progress-wrap progress-wrap--middle">
                <Progress value={90} />
              </div>
            </td>
            <td>275</td>
            <td>TBD</td>
          </tr>
          <tr>
            <td>95845</td>
            <td>Synopsys (IAST)</td>
            <td>Merger Release</td>
            <td>Customer Portal</td>
            <td>
              <div className="progress-wrap progress-wrap--middle">
                <Progress value={0} />
              </div>
            </td>
            <td>TBD</td>
            <td>TBD</td>
          </tr>
          <tr>
            <td>12955</td>
            <td>SonaType Nexus (SCA)</td>
            <td>Spring Release</td>
            <td>Customer Portal</td>
            <td>
              <div className="progress-wrap progress-wrap--middle">
                <Progress value={95} />
              </div>
            </td>
            <td>461</td>
            <td>TBD</td>
          </tr>
          <tr>
            <td>55534</td>
            <td>SonaType Nexus (SCA)</td>
            <td>Spring Release</td>
            <td>Partner Mobile App</td>
            <td>
              <div className="progress-wrap progress-wrap--middle progress-wrap--blue">
                <Progress value={100} />
              </div>
            </td>
            <td>665</td>
            <td><span style={{ color: 'red' }}>31.5</span></td>
          </tr>
          <tr>
            <td>37019</td>
            <td>CheckMarx (SCA)</td>
            <td>Merger Release</td>
            <td>Vendor Registration App</td>
            <td>
              <div className="progress-wrap progress-wrap--middle">
                <Progress value={60} />
              </div>
            </td>
            <td>1052</td>
            <td>TBD</td>
          </tr>
          <tr>
            <td>40504</td>
            <td>Whitehat (DAST)</td>
            <td>CRM Update</td>
            <td>Customer Portal</td>
            <td>
              <div className="progress-wrap progress-wrap--middle progress-wrap--blue">
                <Progress value={100} />
              </div>
            </td>
            <td>466</td>
            <td><span style={{ color: 'lightgreen' }}>96.7</span></td>
          </tr>
        </tbody>
      </Table>
    </CardBody>
  </Card>
);

export default ScanDataTable;
