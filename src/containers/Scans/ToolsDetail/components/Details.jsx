/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
  Row, Col, Card, CardBody,
} from 'reactstrap';

const logoScanner = `${process.env.PUBLIC_URL}/img/veracode.png`;

const logostyle = {
  left: 0,
  width: 100,
  lineHeight: '24px',
};

const Summary = () => (
  <Card>
    <CardBody>
      <Row>
        <Col>
          <div className="card__title">
            <h5 className="bold-text">Details</h5>
          </div>
          <hr />
          <Row>
            <Col xl="4">
              <h6 className="bold-text">Types:</h6>
              DAST, SAST, MAST, SCA
              <p />
              <h6 className="bold-text">Owner:</h6>
              Veracode, Inc.
              <p />
              <h6 className="bold-text">Times Used:</h6>
              110
              <p />
            </Col>
            <Col xl="4">
              <h6 className="bold-text">Description</h6>
              ZenMana and MSAT have announced today the planned merger of their business operations to offer a unified
              mobile and communications solution to the enterprise market. ZenMana will acquire the MSAT assets, people
              and customer contracts and the merged business will operate under the ZenMana brand.
              <p />
            </Col>
            <Col xl="4">
              <img style={logostyle} src={logoScanner} alt="" />
            </Col>
          </Row>
        </Col>
      </Row>
    </CardBody>
  </Card>
);

export default Summary;
