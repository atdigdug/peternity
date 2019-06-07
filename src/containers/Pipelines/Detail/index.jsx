import React from 'react';
import {
  Col, Container, Row, Card, CardBody, Breadcrumb, BreadcrumbItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import Alert from '../../AsfShared/ScanAlert';
import ColumnarData from './components/Columnar';
import Timeline from './components/TimelineHistory';

const PipelineDetail = () => (
  <Container>
    <Row>
      <Breadcrumb>
        <BreadcrumbItem><Link to="/pipelines">Pipelines</Link></BreadcrumbItem>
        <BreadcrumbItem active>Jenkins 2946</BreadcrumbItem>
      </Breadcrumb>
    </Row>
    <Row>
      <Col md={12}>
        <h3 className="page-title">Pipeline : Jenkins 2946</h3>
      </Col>
    </Row>
    <Row>
      <Col>
        <Alert color="success" className="alert--colored" icon>
          <p>1 scan running...</p>
        </Alert>
      </Col>
    </Row>
    <p />

    <ColumnarData />

    <div className="card__title">
      <h5 className="bold-text">Timeline</h5>
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

export default PipelineDetail;
