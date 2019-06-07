import React from 'react';
import {
  Col, Container, Row, Card, CardBody,
} from 'reactstrap';
import Aggregate from '../AsfShared/GenericAggregate';
import StatusTable from './components/StatusTable';
import ColumnarData from './components/Columnar';
import Timeline from './components/TimelineHistory';

const ScansDetail = () => (
  <Container>
    <Row>
      <Col md={12}>
        <h3 className="page-title">Pipelines</h3>
        <h3 className="page-subhead subhead">
          Running 3
        </h3>
      </Col>
    </Row>
    <Row><Aggregate /></Row>
    <div className="card__title">
      <h5 className="bold-text">Tabular</h5>
    </div>
    <Row>
      <Col>
        <Card>
          <CardBody>
            <StatusTable />
          </CardBody>
        </Card>
      </Col>
    </Row>
    <div className="card__title">
      <h5 className="bold-text">Columnar</h5>
    </div>
    <ColumnarData />
    <div className="card__title">
      <h5 className="bold-text">Timeline : Jenkins 2946</h5>
    </div>
    <Row>
      <Col>
        <Card>
          <CardBody>
            <Timeline />
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default ScansDetail;
