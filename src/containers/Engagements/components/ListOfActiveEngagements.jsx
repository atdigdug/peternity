import React from 'react';
import {
  Card, CardBody, Row, Col,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

const ListOfActiveEngagements = () => (
  <Col xl={12}>
    <Card>
      <CardBody>
        <Row>
          <Col xl="6">
            <NavLink to="/engagements/input">
              <div>+ Add New Engagement</div>
            </NavLink>
          </Col>
          <Col xl="6"><div style={{ textAlign: 'right' }}>Recent | Favorites</div></Col>
        </Row>
        <p />
        <Row>
          <Col xl={3}>
            <Card>
              <CardBody style={{ backgroundColor: '#add8e6' }}>
                <NavLink to="/engagements/detail">
                  <h1 className="bold-text">Merger Release</h1>
                </NavLink>
                Due in 3 weeks<p />
                State: Offboarding<p />
                Risk Rating: Low<p />
                AppSecFlo Score: 876
              </CardBody>
            </Card>
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
