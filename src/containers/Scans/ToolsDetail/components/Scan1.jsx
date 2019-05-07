/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
  Card, CardBody, Progress,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import FindingsBar from '../../../AsfShared/FindingsBar';

const Summary = () => (
  <Card>
    <CardBody>
      <div className="card__title">
        <Link to="/scans/detail">
          <h5 className="bold-text">SAST</h5>
        </Link>
        <span className="subhead">#59102</span>
      </div>
      <div className="progress-wrap progress-wrap--middle">
        <Progress value={100} />
      </div>
      <h6 className="bold-text">Application:</h6>
      Partner Mobile App v2.14<p />
      <h6 className="bold-text">Risk rating:</h6>
      54.7<p />
      <h6 className="bold-text">Findings: 750</h6>
      <FindingsBar />
      part of Merger Release
    </CardBody>
  </Card>
);

export default Summary;
