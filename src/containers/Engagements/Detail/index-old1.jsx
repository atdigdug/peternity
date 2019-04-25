import React from 'react';
import {
  Col, Container, Row, Breadcrumb, BreadcrumbItem, Button,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import EditIcon from 'mdi-react/EditIcon';
import Summary from './components/Summary';
import Details from './components/Details';
import App1 from './components/App1';
import App2 from './components/App2';
import App3 from './components/App3';
import Findings from './components/FindingsTable';

const EngagementsDetail = () => (
  <Container>
    <Row>
      <Breadcrumb>
        <BreadcrumbItem><a href="/engagements">Engagements</a></BreadcrumbItem>
        <BreadcrumbItem active>Merger Release</BreadcrumbItem>
      </Breadcrumb>
    </Row>
    <Row>
      <Col>
        <h3 className="page-title">Merger Release</h3>
        <h3 className="page-subhead subhead">6752</h3>
      </Col>
      <Col>
        <div className="float-right">
          <NavLink to="/engagements/input">
            <Button color="success">+ Add Application</Button>
          </NavLink>
          <NavLink to="/engagements/input">
            <Button outline><EditIcon /> Edit Application</Button>
          </NavLink>
        </div>
      </Col>
    </Row>
    <Row>
      <Col xl="8">
        <Row>
          <Col>
            <Summary />
          </Col>
        </Row>
        <div className="card__title">
          <h5 className="bold-text">Applications</h5>
        </div>
        <Row>
          <Col xl="6">
            <App1 />
          </Col>
          <Col xl="6">
            <App2 />
          </Col>
        </Row>
        <Row>
          <Col xl="6">
            <App3 />
          </Col>
        </Row>
      </Col>
      <Col xl="4">
        <Details />
      </Col>
    </Row>
    <Row>
      <Col>
        <Findings />
      </Col>
    </Row>
  </Container>
);

export default EngagementsDetail;
