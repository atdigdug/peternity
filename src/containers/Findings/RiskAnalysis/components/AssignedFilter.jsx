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
        name: 'Assigned Filter',
        width: 300,
      },
    ];

    this.state = {
      rows: this.createRows(),
      pageOfItems: [],
    };
  }

  onChangePage = (pageOfItems) => {
    this.setState({ pageOfItems });
  };

  getRandomDate = (start, end) => new Date(start.getTime() + (Math.random() * (end.getTime()
    - start.getTime()))).toLocaleDateString();

  createRows = () => {
    const rows = [{ id: 'Alice' }, { id: 'Bob' }, { id: 'Chandra' }];
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
