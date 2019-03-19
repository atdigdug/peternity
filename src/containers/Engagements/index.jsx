import React from 'react';
import {
  Col, Container, Row, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, ButtonGroup, Button,
} from 'reactstrap';
import ChevronDownIcon from 'mdi-react/ChevronDownIcon';
import SettingsIcon from 'mdi-react/SettingsIcon';
import EngagementsAggregate from './components/EngagementsAggregate';
import Table from './components/NewDataTable';

const EngagementDefault = () => (
  <Container>
    <Row>
      <Col md={12}>
        <h3 className="page-title">Engagements</h3>
        <h3 className="page-subhead subhead">
          Active 54 &nbsp;&nbsp;&nbsp; Closed 392 &nbsp;&nbsp;&nbsp; Favorites Only 13
        </h3>
      </Col>
    </Row>
    <Row>
      <EngagementsAggregate />
    </Row>
    <Row>
      <Col xl="6">
        <UncontrolledDropdown>
          <DropdownToggle className="icon icon--right">
            <p>Most urgent <ChevronDownIcon /></p>
          </DropdownToggle>
          <DropdownMenu className="dropdown__menu">
            <DropdownItem>Most urgent</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Col>
      <Col xl="6">
        <div className="float-right">
          <ButtonGroup>
            <Button className="icon"><p><SettingsIcon /> Condensed</p></Button>
            <Button className="icon" outline><p><SettingsIcon /> Detailed</p></Button>
          </ButtonGroup>
        </div>
      </Col>
    </Row>
    <Row>
      <Col xl="12">
        <Table />
      </Col>
    </Row>
  </Container>
);

export default EngagementDefault;
