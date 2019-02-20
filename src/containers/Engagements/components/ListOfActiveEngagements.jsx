import React from 'react';
import { Card, CardBody, Row, Col } from 'reactstrap';
import Panel from '../../../shared/components/Panel';

const ListOfActiveEngagements = () => (
  <Panel xl={12}>
    <Row>
      <Col xl={3}>
        <Card>
          <CardBody style={{ backgroundColor: '#90ee90' }}>
            <h1 className="bold-text">E1</h1>
            Engagement 1
          </CardBody>
        </Card>
      </Col>
      <Col xl={3}>
        <Card>
          <CardBody style={{ backgroundColor: '#90ee90' }}>
            <h1 className="bold-text">E2</h1>
            Engagement 2
          </CardBody>
        </Card>
      </Col>
      <Col xl={3}>
        <Card>
          <CardBody style={{ backgroundColor: '#90ee90' }}>
            <h1 className="bold-text">E3</h1>
            Engagement 3
          </CardBody>
        </Card>
      </Col>
      <Col xl={3}>
        <Card>
          <CardBody style={{ backgroundColor: '#90ee90' }}>
            <h1 className="bold-text">E4</h1>
            Engagement 4
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Panel>
);

export default ListOfActiveEngagements;
