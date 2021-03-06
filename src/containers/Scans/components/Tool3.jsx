/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
  Row, Col, Card, CardBody, Badge,
} from 'reactstrap';
import StatusIcon from 'mdi-react/RotateRightIcon';

const logoScanner = `${process.env.PUBLIC_URL}/img/checkmarx.png`;

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
            <h5 className="bold-text" style={{ float: 'left' }}>CheckMarx</h5>
            <h5>&nbsp;#04</h5>
          </div>
          <Badge pill color="success"><StatusIcon /> 2 scans in progress</Badge>
        </Col>
        <Col align="right"><img style={logostyle} src={logoScanner} alt="" /></Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <h6 className="bold-text">Types:</h6>
          SAST, MAST, SCA<p />
          <h6 className="bold-text">Owner:</h6>
          CheckMarx, Inc.<p />
          <h6 className="bold-text">Times used:</h6>
          56<p />
        </Col>
      </Row>
    </CardBody>
  </Card>
);

export default Summary;
