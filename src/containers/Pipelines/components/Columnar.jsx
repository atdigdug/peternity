import React from 'react';
import {
  Card, CardBody, Col, Row,
} from 'reactstrap';
import { Link } from 'react-router-dom';

const ColumnarData = () => (
  <Row>
    <Col>
      <Card>
        <CardBody>
          <div className="card__title">
            <Link to="/pipelines/detail">
              <h5 className="bold-text">Jenkins 2946</h5>
            </Link>
          </div>
          <hr />
          Pending: 1<p />
          Running: 1<p />
          Completed: 1<p />
          Error: 1<p />
          <hr />
          <h5 className="bold-text">Pending:</h5><p />
          FxCop : Partner Mobile App
        </CardBody>
      </Card>
    </Col>
    <Col>
      <Card>
        <CardBody>
          <div className="card__title">
            <h5 className="bold-text">Onboard</h5>
          </div>
          <hr />
          <h5 className="bold-text">Veracode : Partner Mobile App</h5><p />
          6/1/2019 1:19pm
          <hr />
          <h5 className="bold-text">CheckMarx : Partner Mobile App</h5><p />
          Error! Fix error.<p />
          6/1/2019 12:06pm
          <hr />
          <h5 className="bold-text">WhiteHat : Partner Mobile App</h5><p />
          6/1/2019 12:03pm
        </CardBody>
      </Card>
    </Col>
    <Col>
      <Card>
        <CardBody>
          <div className="card__title">
            <h5 className="bold-text">Scan</h5>
          </div>
          <hr />
          <h5 className="bold-text">Veracode : Partner Mobile App</h5><p />
          Running ...
          <hr />
          <h5 className="bold-text">WhiteHat : Partner Mobile App</h5><p />
          Time Taken: 2:43
        </CardBody>
      </Card>
    </Col>
    <Col>
      <Card>
        <CardBody>
          <div className="card__title">
            <h5 className="bold-text">Offboard</h5>
          </div>
          <hr />
          <h5 className="bold-text">WhiteHat : Partner Mobile App</h5><p />
          6/1/2019 12:31pm<p />
          Findings: 325<p />
          OK
        </CardBody>
      </Card>
    </Col>
  </Row>
);

export default ColumnarData;
