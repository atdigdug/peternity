import React from 'react';
import { Table } from 'reactstrap';
import Panel from '../../../../shared/components/Panel';

const AudienceByCountry = () => (
  <Panel lg={12} xl={6} md={12} title="Top Vulnerabilities">
    <Table responsive className="table--bordered dashboard__audience-table">
      <thead>
        <tr>
          <th>Rule</th>
          <th>Apps</th>
          <th>Occurrences</th>
          <th>Tools</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Cross-Site Scripting (XSS)</td>
          <td>3</td>
          <td>17</td>
          <td>WhiteHat, Veracode</td>
        </tr>
        <tr>
          <td>Command Injection</td>
          <td>2</td>
          <td>10</td>
          <td>WhiteHat</td>
        </tr>
        <tr>
          <td>Authentication</td>
          <td>1</td>
          <td>4</td>
          <td>Veracode, Synopsys</td>
        </tr>
        <tr>
          <td>Dead Code</td>
          <td>4</td>
          <td>3</td>
          <td>FxCop</td>
        </tr>
      </tbody>
    </Table>
  </Panel>
);

export default AudienceByCountry;
