/* eslint-disable react/no-unused-state,react/no-unescaped-entities */
import React, { PureComponent } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import EditTable from '../../../shared/components/table/EditableTable';

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
        key: 'first',
        name: 'Scan',
        sortable: true,
      },
      {
        key: 'last',
        name: 'Status',
        sortable: true,
      },
      {
        key: 'user',
        name: 'Consultant',
        sortable: true,
      },
      {
        key: 'age',
        name: 'Business Unit',
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
        id: i,
        first: ['Scan 1', 'Scan 2', 'Scan 3'][Math.floor((Math.random() * 3))],
        last: ['Pri 0', 'Pri 1', 'Pri 2'][Math.floor((Math.random() * 3))],
        user: ['Alice', 'Bob', 'Chandra'][Math.floor((Math.random() * 3))],
        age: ['Online', 'Professional', 'Internal'][Math.floor((Math.random() * 3))],
      });
    }
    return rows;
  };

  render() {
    return (
      <Col md={12} lg={12}>
        <Card>
          <CardBody>
            <EditTable heads={this.heads} rows={this.state.rows} />
          </CardBody>
        </Card>
      </Col>
    );
  }
}
