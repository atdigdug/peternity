/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
  Card, CardBody, Progress,
} from 'reactstrap';
import FindingsBar from '../../../AsfShared/FindingsBar';

const Summary = () => (
  <Card>
    <CardBody>
      <div className="card__title">
        <h5 className="bold-text">Manual Findings</h5>
        <span className="subhead">26 Entries</span>
      </div>
      <div className="progress-wrap progress-wrap--middle">
        <Progress value={100} />
      </div>
      <h6 className="bold-text">Type:</h6>
      Manual Entry<p />
      <h6 className="bold-text">Risk rating:</h6>
      7.8<p />
      <h6 className="bold-text">Findings:</h6>
      <FindingsBar />
    </CardBody>
  </Card>
);

export default Summary;
