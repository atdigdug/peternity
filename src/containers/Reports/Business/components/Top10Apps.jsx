import React from 'react';
import { Table } from 'reactstrap';
import Panel from '../../../../shared/components/Panel';

const AudienceByCountry = () => (
  <Panel lg={12} xl={6} md={12} title="Top Apps">
    <Table responsive className="table--bordered dashboard__audience-table">
      <thead>
        <tr>
          <th>App</th>
          <th>Risk Rating</th>
          <th>Scans</th>
          <th>Findings</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Partner Mobile App</td>
          <td>94.6</td>
          <td>14</td>
          <td>578</td>
        </tr>
        <tr>
          <td>Customer Portal</td>
          <td>57.9</td>
          <td>7</td>
          <td>367</td>
        </tr>
        <tr>
          <td>Vendor Registration App</td>
          <td>67.3</td>
          <td>3</td>
          <td>443</td>
        </tr>
        <tr>
          <td>Sonia App</td>
          <td>23.5</td>
          <td>3</td>
          <td>438</td>
        </tr>
      </tbody>
    </Table>
  </Panel>
);

export default AudienceByCountry;
