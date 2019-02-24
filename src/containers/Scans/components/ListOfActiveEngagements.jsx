import React from 'react';
import { Card, CardBody, Row, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const ListOfActiveEngagements = () => (
  <Col xl={12}>
    <Card>
      <CardBody>
        <div style={{ textAlign: 'right' }}>Recent | Favorites</div><p />
        <Row>
          <Col xl={3}>
            <NavLink to="/scans/detail">
              <Card>
                <CardBody style={{ backgroundColor: '#add8e6' }}>
                  <h1 className="bold-text">Scan 1</h1>
                  Last Run: 1/1/2019
                </CardBody>
              </Card>
            </NavLink>
          </Col>
          <Col xl={3}>
            <Card>
              <CardBody style={{ backgroundColor: '#add8e6' }}>
                <h1 className="bold-text">Scan 2</h1>
                Last Run: 1/1/2019
              </CardBody>
            </Card>
          </Col>
          <Col xl={3}>
            <Card>
              <CardBody style={{ backgroundColor: '#add8e6' }}>
                <h1 className="bold-text">Scan 3</h1>
                Last Run: 1/1/2019
              </CardBody>
            </Card>
          </Col>
          <Col xl={3}>
            <Card>
              <CardBody style={{ backgroundColor: '#add8e6' }}>
                <h1 className="bold-text">Scan 4</h1>
                Last Run: 1/1/2019
              </CardBody>
            </Card>
          </Col>
        </Row>
      </CardBody>
    </Card>
  </Col>
);

export default ListOfActiveEngagements;
