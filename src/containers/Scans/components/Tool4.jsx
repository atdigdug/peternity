/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
  Row, Col, Card, CardBody, Badge,
} from 'reactstrap';
import StatusIcon from 'mdi-react/RotateRightIcon';

const logoScanner = `${process.env.PUBLIC_URL}/img/synopsys.png`;

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
            <h5 className="bold-text" style={{ float: 'left' }}>Synopsys</h5>
            <h5>&nbsp;#55</h5>
          </div>
          <Badge pill color="success"><StatusIcon /> 1 scan in progress</Badge>
        </Col>
        <Col align="right"><img style={logostyle} src={logoScanner} alt="" /></Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <h6 className="bold-text">Types:</h6>
          SAST, MAST, SCA<p />
          <h6 className="bold-text">Owner:</h6>
          Synopsys, Inc.<p />
          <h6 className="bold-text">Times used:</h6>
          42<p />
        </Col>
      </Row>
    </CardBody>
  </Card>
);

export default Summary;
