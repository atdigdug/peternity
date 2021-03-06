/* eslint-disable react/no-unused-state,react/no-unescaped-entities */
import React, { PureComponent } from 'react';
import { Card, CardBody } from 'reactstrap';
import EditTable from '../../../../shared/components/table/EditableTable';

export default class DataTable extends PureComponent {
  constructor() {
    super();
    this.heads = [
      {
        key: 'id',
        name: 'ID',
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
        key: 'app',
        name: 'Application',
        sortable: true,
      },
      {
        key: 'assigned',
        name: 'Assigned',
        sortable: true,
      },
      {
        key: 'risk',
        name: 'Risk',
        sortable: true,
      },
    ];

    this.state = {
      rows: this.createRows(23),
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
        id: Math.floor((Math.random() * 999999999)),
        rule: ['Cross-site scripting (XSS)', 'Command injection', 'Authentication',
          'Dead code', 'Cross-site request forgery'][Math.floor((Math.random() * 5))],
        tool: ['Whitehat', 'Veracode', 'CheckMarx', 'FxCop'][Math.floor((Math.random() * 4))],
        app: ['Customer Portal', 'Partner Mobile App', 'Vendor Registration App'][Math.floor((Math.random() * 3))],
        assigned: ['App 1', 'App 2', 'App 3'][Math.floor((Math.random() * 3))],
        risk: ['High', 'Medium', 'Low'][Math.floor((Math.random() * 3))],
      });
    }
    return rows;
  };

  render() {
    return (
      <Card>
        <CardBody>
          <div className="card__title">
            <h5 className="bold-text">Findings</h5>
          </div>
          <EditTable heads={this.heads} rows={this.state.rows} />
        </CardBody>
      </Card>
    );
  }
}
