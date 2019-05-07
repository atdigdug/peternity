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
        <h5 className="bold-text">SCA</h5>
        <span className="subhead">#25621</span>
      </div>
      <div className="progress-wrap progress-wrap--middle">
        <Progress value={100} />
      </div>
      <h6 className="bold-text">Application:</h6>
      Customer Portal v19.2<p />
      <h6 className="bold-text">Risk rating:</h6>
      86.2<p />
      <h6 className="bold-text">Findings: 467</h6>
      <FindingsBar />
      part of CRM Update
    </CardBody>
  </Card>
);

export default Summary;
