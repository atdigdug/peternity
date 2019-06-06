/* eslint-disable react/no-unused-state,react/no-unescaped-entities */
import React, { PureComponent } from 'react';
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
        name: 'From',
        sortable: true,
        width: 100,
      },
      {
        key: 'user',
        name: 'Context',
        sortable: true,
        width: 200,
      },
      {
        key: 'age',
        name: 'Message',
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
        first: ['Alice', 'Bob', 'Chandra'][Math.floor((Math.random() * 3))],
        user: ['E1 / App1 / Scan1', 'E1 / App2 / Scan2', 'E2 / App1 / Scan 4'][Math.floor((Math.random() * 3))],
        age: ['Message 1. Arrived compass prepare an on as. Reasonable particular on my it in sympathize ...',
          'Message 2. Assure polite his really and others figure though. Day age advantages end sufficient eat ...',
          'Message 3. Say ferrars demands besides her address. Blind going you merit few fancy their ...',
        ][Math.floor((Math.random() * 3))],
      });
    }
    return rows;
  };

  render() {
    return (
      <EditTable heads={this.heads} rows={this.state.rows} />
    );
  }
}
