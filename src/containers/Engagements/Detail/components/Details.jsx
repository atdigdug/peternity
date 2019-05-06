/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
  Row, Col, Card, CardBody, Button,
} from 'reactstrap';
import FavoriteIcon from 'mdi-react/StarIcon';
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
          <span className="bold-text" style={{ color: 'green' }}><FavoriteIcon /> Favorite</span>
          <p />
          <h6 className="bold-text">Consultant</h6>
          <span className="bold-text" style={{ color: 'green' }}>Bob</span>
          <p />
          <h6 className="bold-text">Due date</h6>
          27 Jul 2019
          <p />
          <h6 className="bold-text">Risk rating:</h6>
          TBD
          <p />
          <h6 className="bold-text">Findings: 1695</h6>
          <FindingsBar />
          <p />
          <h6 className="bold-text">Description</h6>
          ZenMana and MSAT have announced today the planned merger of their business operations to offer a unified
          mobile and communications solution to the enterprise market. ZenMana will acquire the MSAT assets, people
          and customer contracts and the merged business will operate under the ZenMana brand.
          <p />
          <h6 className="bold-text">Requestor</h6>
          <span className="bold-text" style={{ color: 'green' }}>DongXi Doe</span>
          <p />
          <h6 className="bold-text">Manager</h6>
          <span className="bold-text" style={{ color: 'green' }}>Chandra Jackson</span>
          <p />
          <Button outline><HistoryIcon />Engagement history</Button>
          <br />
          last modified by <span className="bold-text" style={{ color: 'green' }}>Effendi</span>
          <br />
          16 Apr 2019 12:35 PM
        </Col>
      </Row>
    </CardBody>
  </Card>
);

export default Summary;
