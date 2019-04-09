/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
  Row, Col, Card, CardBody,
} from 'reactstrap';
import FavoriteIcon from 'mdi-react/FavoriteIcon';

const Summary = () => (
  <Card>
    <CardBody>
      <Row>
        <Col>
          <FavoriteIcon /> Add to favorites
          <hr />
          <p />
          <h6 className="bold-text">Description</h6>
          ZenMana and MSAT have announced today the planned merger of their business operations to offer a unified
          mobile and communications solution to the enterprise market. ZenMana will acquire the MSAT assets, people
          and customer contracts and the merged business will operate under the ZenMana brand.
          <p />
        </Col>
      </Row>
    </CardBody>
  </Card>
);

export default Summary;
