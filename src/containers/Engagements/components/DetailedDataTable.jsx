import React from 'react';
import {
  Progress, Card, CardBody, Row, Col,
} from 'reactstrap';
import Donut from '../Detail/components/SummaryDonut';

const EngagementDataTable = () => (
  <Card>
    <CardBody>
      <Row>
        <Col>
          <h4>Merger Release</h4>
          6752
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <h6 className="bold-text">Due Date:</h6>
          7/27/2019<p />
          <h6 className="bold-text">Consultant:</h6>
          Bob<p />
          <h6 className="bold-text">Risk rating:</h6>
          Low (893)<p />
          <h6 className="bold-text">Progress:</h6>
          <div className="progress-wrap progress-wrap--middle progress-wrap--blue">
            <Progress value={80} />
          </div>
        </Col>
        <Col>Applications</Col>
        <Col>
          <h6 className="bold-text">Findings risk:</h6>
          <Donut />
        </Col>
      </Row>
    </CardBody>
  </Card>
);

export default EngagementDataTable;
