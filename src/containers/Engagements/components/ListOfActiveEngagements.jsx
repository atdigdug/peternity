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
            <NavLink to="/engagements/detail">
              <Card>
                <CardBody style={{ backgroundColor: '#add8e6' }}>
                  <h1 className="bold-text">Merger Release</h1>
                  Merger Release
                </CardBody>
              </Card>
            </NavLink>
          </Col>
          <Col xl={3}>
            <Card>
              <CardBody style={{ backgroundColor: '#add8e6' }}>
                <h1 className="bold-text">Spring Release</h1>
                Spring Release
              </CardBody>
            </Card>
          </Col>
          <Col xl={3}>
            <Card>
              <CardBody style={{ backgroundColor: '#add8e6' }}>
                <h1 className="bold-text">CRM Update</h1>
                CRM Update
              </CardBody>
            </Card>
          </Col>
          <Col xl={3}>
            <Card>
              <CardBody style={{ backgroundColor: '#add8e6' }}>
                <h1 className="bold-text">China 2020</h1>
                China 2020
              </CardBody>
            </Card>
          </Col>
        </Row>
      </CardBody>
    </Card>
  </Col>
);

export default ListOfActiveEngagements;
