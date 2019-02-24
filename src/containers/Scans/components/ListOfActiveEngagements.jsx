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
            <NavLink to="/appsmodules/detail">
              <Card>
                <CardBody style={{ backgroundColor: '#add8e6' }}>
                  <h1 className="bold-text">App 1</h1>
                  Application 1
                </CardBody>
              </Card>
            </NavLink>
          </Col>
          <Col xl={3}>
            <Card>
              <CardBody style={{ backgroundColor: '#add8e6' }}>
                <h1 className="bold-text">App 2</h1>
                Application 2
              </CardBody>
            </Card>
          </Col>
          <Col xl={3}>
            <Card>
              <CardBody style={{ backgroundColor: '#add8e6' }}>
                <h1 className="bold-text">App 3</h1>
                Application 3
              </CardBody>
            </Card>
          </Col>
          <Col xl={3}>
            <Card>
              <CardBody style={{ backgroundColor: '#add8e6' }}>
                <h1 className="bold-text">App 4</h1>
                Application 4
              </CardBody>
            </Card>
          </Col>
        </Row>
      </CardBody>
    </Card>
  </Col>
);

export default ListOfActiveEngagements;
