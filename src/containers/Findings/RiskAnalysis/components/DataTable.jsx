/* eslint-disable react/no-unused-state,react/no-unescaped-entities */
import React, { PureComponent } from 'react';
import { Card, CardBody } from 'reactstrap';
import EditTable from './EditableTable2';

export default class DataTable extends PureComponent {
  constructor() {
    super();
    this.heads = [
      {
        key: 'id',
        name: '#',
        width: 80,
      },
      {
        key: 'risk',
        name: 'Risk',
        sortable: true,
      },
      {
        key: 'rule',
        name: 'Rule',
        sortable: true,
      },
      {
        key: 'tool',
        name: 'Tool',
        sortable: true,
      },
      {
        key: 'over',
        name: 'Override',
        sortable: true,
      },
      {
        key: 'assigned',
        name: 'Assigned',
        sortable: true,
      },
    ];

    this.state = {
      rows: this.createRows(40),
      pageOfItems: [],
    };
  }

  onChangePage = (pageOfItems) => {
    this.setState({ pageOfItems });
  };

  getRandomDate = (start, end) => new Date(start.getTime() + (Math.random() * (end.getTime()
    - start.getTime()))).toLocaleDateString();

  createRows = (numberOfRows) => {
    const rows = [];
    for (let i = 1; i < numberOfRows + 1; i += 1) {
      rows.push({
        id: i,
        risk: ['High', 'Medium', 'Low'][Math.floor((Math.random() * 3))],
        rule: ['Authentication',
          'Avoid namespaces with few types',
          'Cleanup',
          'Code Injection',
          'Command Injection',
          'Concurrency',
          'Credentials Management',
          'Cross-Site Request Forgery (CSRF)',
          'Cross-Site Scripting (XSS)',
          'Cryptographic Issue',
          'Dead Code',
        ][Math.floor((Math.random() * 11))],
        tool: ['WhiteHat', 'Veracode', 'CheckMarx', 'FxCop'][Math.floor((Math.random() * 4))],
        over: ['Y', 'N'][Math.floor((Math.random() * 2))],
        assigned: ['Alice', 'Bob', 'Chandra'][Math.floor((Math.random() * 3))],
      });
    }
    return rows;
  };

  render() {
    return (
      <Card>
        <CardBody>
          <EditTable heads={this.heads} rows={this.state.rows} />
        </CardBody>
      </Card>
    );
  }
}
