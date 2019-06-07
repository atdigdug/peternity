import React, { PureComponent } from 'react';
import {
  Col, Container, Row, UncontrolledDropdown, DropdownToggle, DropdownMenu,
  DropdownItem, ButtonGroup, Button,
} from 'reactstrap';
import ChevronDownIcon from 'mdi-react/ChevronDownIcon';
import CondensedIcon from 'mdi-react/MenuIcon';
import DetailedIcon from 'mdi-react/ViewAgendaIcon';
import Aggregate from '../AsfShared/GenericAggregate';
import StatusTable from './components/StatusTable';
import ColumnarData from './components/Columnar';

export default class ScansDetail extends PureComponent {
  constructor() {
    super();
    this.state = { isCondensed: true };
  }

  render() {
    let dataTable;

    document.title = 'Engagements - AppSecFlo';

    if (this.state.isCondensed) {
      dataTable = <StatusTable />;
    } else {
      dataTable = <ColumnarData />;
    }

    return (
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

        {dataTable}

      </Container>
    );
  }
}
