import React from 'react';
import {
  Col, Container, Row, Breadcrumb, BreadcrumbItem, Button,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import EditIcon from 'mdi-react/EditIcon';
import Alert from '../../AsfShared/ScanAlert';
import Scan1 from './components/Scan1';
import Scan2 from './components/Scan2';
import Scan3 from './components/Scan3';
import Details from './components/Details';
import CompletedScans from './components/ScansTable';

const AppsModulesDetail = () => (
  <Container>
    <Row>
      <Breadcrumb>
        <BreadcrumbItem><a href="/engagements/detail">Merger Release</a></BreadcrumbItem>
        <BreadcrumbItem active>Partner Mobile App</BreadcrumbItem>
      </Breadcrumb>
    </Row>
    <Row>
      <Col>
        <h3 className="page-title">Veracode</h3>
        <h3 className="page-subhead subhead">#14</h3>
      </Col>
      <Col>
        <div className="float-right">
          <NavLink to="/engagements/input">
            <Button outline><EditIcon /> Edit Tool</Button>
          </NavLink>
        </div>
      </Col>
    </Row>
    <Row>
      <Col>
        <Alert color="success" className="alert--colored" icon>
          <p>3 scans in progress...</p>
        </Alert>
      </Col>
    </Row>
    <p />
    <Row>
      <Col>
        <Details />
      </Col>
    </Row>
    <Row>
      <Col xl="4">
        <Scan1 />
      </Col>
      <Col xl="4">
        <Scan2 />
      </Col>
      <Col xl="4">
        <Scan3 />
      </Col>
    </Row>
    <Row>
      <Col>
        <CompletedScans />
      </Col>
    </Row>
  </Container>
);

export default AppsModulesDetail;
