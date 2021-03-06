import React, { PureComponent } from 'react';
import {
  Col, Container, Row, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, ButtonGroup, Button,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import ChevronDownIcon from 'mdi-react/ChevronDownIcon';
import CondensedIcon from 'mdi-react/MenuIcon';
import DetailedIcon from 'mdi-react/ViewAgendaIcon';
import EngagementsAggregate from '../AsfShared/GenericAggregate';
import Table from './components/NewDataTable';
import DetailedTable from './components/DetailedDataTable';

export default class EngagementDefault extends PureComponent {
  constructor() {
    super();
    this.state = { isCondensed: true };
  }

  render() {
    let dataTable;

    document.title = 'Engagements - AppSecFlo';

    if (this.state.isCondensed) {
      dataTable = <Table />;
    } else {
      dataTable = <DetailedTable />;
    }

    return (
      <Container>
        <Row>
          <Col>
            <h3 className="page-title">Engagements</h3>
            <h3 className="page-subhead subhead">
              Active 54 &nbsp;&nbsp;&nbsp; Closed 392 &nbsp;&nbsp;&nbsp; Favorites Only 13
            </h3>
          </Col>
          <Col>
            <div className="float-right">
              <NavLink to="/engagements/input">
                <Button color="success">+ New Engagement</Button>
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
                <p>Most urgent <ChevronDownIcon /></p>
              </DropdownToggle>
              <DropdownMenu className="dropdown__menu">
                <DropdownItem>Most urgent</DropdownItem>
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
