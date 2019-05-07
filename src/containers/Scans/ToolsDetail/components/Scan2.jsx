/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
  Card, CardBody, Progress,
} from 'reactstrap';
import FindingsBar from '../../../AsfShared/FindingsBarTbd';

const Summary = () => (
  <Card>
    <CardBody>
      <div className="card__title">
        <h5 className="bold-text">DAST</h5>
        <span className="subhead">#37791</span>
      </div>
      <div className="progress-wrap progress-wrap--middle progress-wrap--blue">
        <Progress value={20} />
      </div>
      <h6 className="bold-text">Application:</h6>
      Partner Mobile App v2.14<p />
      <h6 className="bold-text">Risk rating:</h6>
      TBD<p />
      <h6 className="bold-text">Findings: TBD</h6>
      <FindingsBar />
      part of Merger Release
    </CardBody>
  </Card>
);

export default Summary;
