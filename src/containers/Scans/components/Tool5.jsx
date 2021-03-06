/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
  Row, Col, Card, CardBody, Badge,
} from 'reactstrap';
import StatusIcon from 'mdi-react/HistoryIcon';

const logoScanner = `${process.env.PUBLIC_URL}/img/sonatype.png`;

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
            <h5 className="bold-text" style={{ float: 'left' }}>SonaType Nexus</h5>
            <h5>&nbsp;#34</h5>
          </div>
          <Badge pill><StatusIcon /> last used 5 Apr</Badge>
        </Col>
        <Col align="right"><img style={logostyle} src={logoScanner} alt="" /></Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <h6 className="bold-text">Types:</h6>
          SCA<p />
          <h6 className="bold-text">Owner:</h6>
          Sonatype, Inc.<p />
          <h6 className="bold-text">Times used:</h6>
          12<p />
        </Col>
      </Row>
    </CardBody>
  </Card>
);

export default Summary;
