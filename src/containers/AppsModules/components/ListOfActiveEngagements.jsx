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
            <Card>
              <CardBody style={{ backgroundColor: '#add8e6' }}>
                <NavLink to="/appsmodules/detail">
                  <h1 className="bold-text">Customer Portal</h1>
                </NavLink>
                Version: 2.0.1
              </CardBody>
            </Card>
          </Col>
          <Col xl={3}>
            <Card>
              <CardBody style={{ backgroundColor: '#add8e6' }}>
                <h1 className="bold-text">Partner Mobile App</h1>
                Version: 3.1.4
              </CardBody>
            </Card>
          </Col>
          <Col xl={3}>
            <Card>
              <CardBody style={{ backgroundColor: '#add8e6' }}>
                <h1 className="bold-text">Vendor Registration App</h1>
                Version: 1.1.2
              </CardBody>
            </Card>
          </Col>
          <Col xl={3}>
            <Card>
              <CardBody style={{ backgroundColor: '#add8e6' }}>
                <h1 className="bold-text">App 4</h1>
                Version: 0.1
              </CardBody>
            </Card>
          </Col>
        </Row>
      </CardBody>
    </Card>
  </Col>
);

export default ListOfActiveEngagements;
