/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
  Row, Col, Card, CardBody, Button,
} from 'reactstrap';
import HistoryIcon from 'mdi-react/HistoryIcon';
import FindingsBar from '../../../AsfShared/FindingsBar';

const Summary = () => (
  <Card>
    <CardBody>
      <Row>
        <Col>
          <div className="card__title">
            <h5 className="bold-text">Details</h5>
          </div>
          <hr />
          <p />
          <h6 className="bold-text">Risk Rating:</h6>
          TBD
          <p />
          <h6 className="bold-text">Findings: 750</h6>
          <FindingsBar />
          <p />
          <h6 className="bold-text">Version Notes:</h6>
          ZenMana and MSAT have announced today the planned merger of their business operations to offer a unified
          mobile and communications solution to the enterprise market. ZenMana will acquire the MSAT assets, people
          and customer contracts and the merged business will operate under the ZenMana brand.
          <p />
          <Button outline><HistoryIcon />Version history</Button>
          <br />
          last modified by <span className="bold-text" style={{ color: 'green' }}>Chandra</span>
          <br />
          15 Apr 2019 10:00 AM
        </Col>
      </Row>
    </CardBody>
  </Card>
);

export default Summary;
