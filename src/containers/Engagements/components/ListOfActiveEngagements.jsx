import React from 'react';
import { Card, CardBody, Row, Col } from 'reactstrap';

const ListOfActiveEngagements = () => (
  <Col xl={12}>
    <Card>
      <CardBody>
        <div style={{ textAlign: 'right' }}>Recent | Favorites</div><p />
        <Row>
          <Col xl={3}>
            <Card>
              <CardBody style={{ backgroundColor: '#add8e6' }}>
                <h1 className="bold-text">E1</h1>
                Engagement 1
              </CardBody>
            </Card>
          </Col>
          <Col xl={3}>
            <Card>
              <CardBody style={{ backgroundColor: '#add8e6' }}>
                <h1 className="bold-text">E2</h1>
                Engagement 2
              </CardBody>
            </Card>
          </Col>
          <Col xl={3}>
            <Card>
              <CardBody style={{ backgroundColor: '#add8e6' }}>
                <h1 className="bold-text">E3</h1>
                Engagement 3
              </CardBody>
            </Card>
          </Col>
          <Col xl={3}>
            <Card>
              <CardBody style={{ backgroundColor: '#add8e6' }}>
                <h1 className="bold-text">E4</h1>
                Engagement 4
              </CardBody>
            </Card>
          </Col>
        </Row>
      </CardBody>
    </Card>
  </Col>
);

export default ListOfActiveEngagements;
