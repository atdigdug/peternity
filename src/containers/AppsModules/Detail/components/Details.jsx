/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
  Row, Col, Card, CardBody, Button,
} from 'reactstrap';
import FavoriteIcon from 'mdi-react/StarOutlineIcon';
import HistoryIcon from 'mdi-react/HistoryIcon';

const Summary = () => (
  <Card>
    <CardBody>
      <Row>
        <Col>
          <div className="card__title">
            <h5 className="bold-text">Details</h5>
          </div>
          <hr />
          <FavoriteIcon /> Add to Favorites
          <p />
          <h6 className="bold-text">Consultant</h6>
          <span className="bold-text" style={{ color: 'green' }}>Chandra</span>
          <p />
          <h6 className="bold-text">Platform</h6>
          Android
          <p />
          <h6 className="bold-text">Architecture</h6>
          Java
          <p />
          <h6 className="bold-text">Description</h6>
          ZenMana and MSAT have announced today the planned merger of their business operations to offer a unified
          mobile and communications solution to the enterprise market. ZenMana will acquire the MSAT assets, people
          and customer contracts and the merged business will operate under the ZenMana brand.
          <p />
          <h6 className="bold-text">Data Center</h6>
          Virginia
          <p />
          <h6 className="bold-text">Technical Contact</h6>
          <span className="bold-text" style={{ color: 'green' }}>Jackson</span>
          <p />
          <Button outline><HistoryIcon />Application history</Button>
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
