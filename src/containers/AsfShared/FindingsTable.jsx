import React from 'react';
import {
  Table, Card, CardBody, ButtonGroup, ButtonToolbar, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import ChevronDownIcon from 'mdi-react/ChevronDownIcon';
import SearchIcon from 'mdi-react/MagnifyIcon';

const EngagementDataTable = () => (
  <div>
    <div className="card__title">
      <h5 className="bold-text float-left">Findings</h5>
      <h5 className="subhead">&nbsp;750</h5>
    </div>
    <ButtonToolbar className="form__button-toolbar">
      <UncontrolledDropdown>
        <DropdownToggle className="icon icon--right">
          <p>Most recent <ChevronDownIcon /></p>
        </DropdownToggle>
        <DropdownMenu className="dropdown__menu">
          <DropdownItem>Most recent</DropdownItem>
          <DropdownItem>Most urgent</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
      <ButtonGroup>
        <form className="form">
          <div className="form__form-group">
            <div className="form__form-group-field" style={{ backgroundColor: 'white' }}>
              <div className="form__form-group-icon">
                <SearchIcon />
              </div>
              <input name="search" type="text" placeholder="search findings ..." />
            </div>
          </div>
        </form>
      </ButtonGroup>
    </ButtonToolbar>
    <Card>
      <CardBody>
        <Table responsive hover className="table--bordered dashboard__audience-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Rule</th>
              <th>Tool</th>
              <th>Application</th>
              <th>Assigned</th>
              <th>Risk</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <Link to="/findings/detail">
                <td>Cross-site scripting (XSS)</td>
              </Link>
              <td>CheckMarx</td>
              <td>Customer Portal</td>
              <td>Bob</td>
              <td>Medium</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Command injection</td>
              <td>FxCop</td>
              <td>Partner Mobile App</td>
              <td>Chandra</td>
              <td>Medium</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Authentication</td>
              <td>Veracode</td>
              <td>Partner Mobile App</td>
              <td>Chandra</td>
              <td>Low</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Dead code</td>
              <td>Veracode</td>
              <td>Vendor Registration App</td>
              <td>Howard</td>
              <td>High</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Cross-site request forgery (CSRF)</td>
              <td>CheckMarx</td>
              <td>Vendor Registration App</td>
              <td>Bob</td>
              <td>Medium</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Cross-site request forgery (CSRF)</td>
              <td>Veracode</td>
              <td>Customer Portal</td>
              <td>Howard</td>
              <td>Low</td>
            </tr>
            <tr>
              <td>7</td>
              <td>Cross-site scripting (XSS)</td>
              <td>FxCop</td>
              <td>Customer Portal</td>
              <td>Alice</td>
              <td>Low</td>
            </tr>
            <tr>
              <td>8</td>
              <td>Command injection</td>
              <td>FxCop</td>
              <td>Partner Mobile App</td>
              <td>Alice</td>
              <td>High</td>
            </tr>
            <tr>
              <td>9</td>
              <td>Cross-site scripting (XSS)</td>
              <td>CheckMarx</td>
              <td>Vendor Registration App</td>
              <td>Bob</td>
              <td>Low</td>
            </tr>
            <tr>
              <td>10</td>
              <td>Dead code</td>
              <td>Veracode</td>
              <td>Customer Portal</td>
              <td>Chandra</td>
              <td>Low</td>
            </tr>
          </tbody>
        </Table>
      </CardBody>
    </Card>
  </div>
);

export default EngagementDataTable;
