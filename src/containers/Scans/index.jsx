import React from 'react';
import {
  Col, Container, Row, Button, ButtonToolbar, ButtonGroup,
  UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem,
} from 'reactstrap';
import ChevronDownIcon from 'mdi-react/ChevronDownIcon';
import FilterIcon from 'mdi-react/FilterVariantIcon';
import SearchIcon from 'mdi-react/MagnifyIcon';
import Tool1 from './components/Tool1';
import Table from './components/DataTable';

const ApplicationsDefault = () => (
  <Container>
    <Row>
      <Col>
        <h3 className="page-title">Scanning tools</h3>
        <h3 className="page-subhead subhead">
          5 items
        </h3>
      </Col>
      <Col>
        <div className="float-right">
          <Button color="success">+ New tool</Button>
        </div>
      </Col>
    </Row>
    <Row>
      <Col>
        <ButtonToolbar className="form__button-toolbar">
          <UncontrolledDropdown>
            <DropdownToggle className="icon icon--right">
              <p>Most urgent <ChevronDownIcon /></p>
            </DropdownToggle>
            <DropdownMenu className="dropdown__menu">
              <DropdownItem>Most urgent</DropdownItem>
              <DropdownItem>Most recent</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <UncontrolledDropdown>
            <DropdownToggle className="icon icon--right" outline>
              <p><FilterIcon /> &nbsp; Filter</p>
            </DropdownToggle>
            <DropdownMenu className="dropdown__menu">
              <DropdownItem>Filter1</DropdownItem>
              <DropdownItem>Filter2</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <ButtonGroup>
            <form className="form">
              <div className="form__form-group">
                <div className="form__form-group-field" style={{ backgroundColor: 'white' }}>
                  <div className="form__form-group-icon">
                    <SearchIcon />
                  </div>
                  <input name="search" type="text" placeholder="Search..." />
                </div>
              </div>
            </form>
          </ButtonGroup>
        </ButtonToolbar>
      </Col>
    </Row>
    <Row>
      <Col><Tool1 /></Col>
      <Col><Tool1 /></Col>
    </Row>
    <Row>
      <Col><Tool1 /></Col>
      <Col><Tool1 /></Col>
    </Row>
    <Row>
      <Col><Tool1 /></Col>
      <Col>&nbsp;</Col>
    </Row>
    <Row>
      <Table />
    </Row>
  </Container>
);

export default ApplicationsDefault;
