/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
  Row, Col, Card, CardBody, Progress, Button,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import FavoriteIcon from 'mdi-react/StarIcon';
import StatusIcon from 'mdi-react/DoneIcon';
import Donut from '../Detail/components/SummaryDonut';

const Summary = () => (
  <Card>
    <CardBody>
      <Row>
        <Col>
          <div className="card__title">
            <NavLink to="/appsmodules/detail">
              <h5 className="bold-text">Partner Mobile App</h5>
            </NavLink>
            <span className="subhead">v19.2</span>
          </div>
        </Col>
        <Col align="right"><FavoriteIcon /></Col>
      </Row>
      <Row>
        <Col>
          <div className="progress-wrap progress-wrap--middle">
            <Progress value={100} />
          </div>
        </Col>
        <Col align="right">
          <Button className="rounded"><StatusIcon /> Risk Model</Button>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <h6 className="bold-text">Architecture:</h6>
          Java<p />
          <h6 className="bold-text">Total Scans:</h6>
          31<p />
          <h6 className="bold-text">Consultant:</h6>
          Bob<p />
          <h6 className="bold-text">Risk rating:</h6>
          Low (893)<p />
        </Col>
        <Col>
          <h6 className="bold-text">Findings risk:</h6>
          <Donut />
        </Col>
      </Row>
    </CardBody>
  </Card>
);

export default Summary;
