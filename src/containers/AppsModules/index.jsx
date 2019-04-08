import React, { PureComponent } from 'react';
import {
  Col, Container, Row, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, ButtonGroup, Button,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import ChevronDownIcon from 'mdi-react/ChevronDownIcon';
import CondensedIcon from 'mdi-react/MenuIcon';
import DetailedIcon from 'mdi-react/ViewAgendaIcon';
import EngagementsAggregate from './components/EngagementsAggregate';
import Table from './components/DataTable';

export default class EngagementDefault extends PureComponent {
  constructor() {
    super();
    this.state = { isCondensed: true };
  }

  render() {
    let dataTable;

    if (this.state.isCondensed) {
      dataTable = <Table />;
    } else {
      dataTable = <Table />;
    }

    return (
      <Container>
        <Row>
          <Col>
            <h3 className="page-title">Applications</h3>
            <h3 className="page-subhead subhead">
              All (75) &nbsp;&nbsp;&nbsp; Favorites Only (14)
            </h3>
          </Col>
          <Col>
            <div className="float-right">
              <NavLink to="/engagements/input">
                <Button color="success">+ Add Application</Button>
              </NavLink>
            </div>
          </Col>
        </Row>
        <Row>
          <EngagementsAggregate />
        </Row>
        <Row>
          <Col xl="6">
            <UncontrolledDropdown>
              <DropdownToggle className="icon icon--right">
                <p>Most recent <ChevronDownIcon /></p>
              </DropdownToggle>
              <DropdownMenu className="dropdown__menu">
                <DropdownItem>Most recent</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Col>
          <Col xl="6">
            <div className="float-right">
              <ButtonGroup>
                <Button className="icon" onClick={() => this.setState({ isCondensed: true })}>
                  <p><CondensedIcon /> Condensed</p>
                </Button>
                <Button className="icon" outline onClick={() => this.setState({ isCondensed: false })}>
                  <p><DetailedIcon /> Detailed</p>
                </Button>
              </ButtonGroup>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xl="12">
            {dataTable}
          </Col>
        </Row>
      </Container>
    );
  }
}
