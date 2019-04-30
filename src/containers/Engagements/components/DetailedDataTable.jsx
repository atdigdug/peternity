import React from 'react';
import {
  Progress, Card, CardBody, Row, Col, Badge,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import FavoritedIcon from 'mdi-react/StarIcon';
import FavoriteIcon from 'mdi-react/StarOutlineIcon';
import CompletedIcon from 'mdi-react/DoneIcon';
import InProgressIcon from 'mdi-react/RotateRightIcon';
import FindingsBar from './FindingsBar';

const EngagementDataTable = () => (
  <div>
    <Card>
      <CardBody>
        <Row>
          <Col>
            <NavLink to="/engagements/detail">
              <h4>Merger Release</h4>
            </NavLink>
            #6752
            <p />
            <div className="progress-wrap progress-wrap--middle">
              <Progress value={80} />
            </div>
          </Col>
          <Col>
            &nbsp;
          </Col>
          <Col align="right">
            <span style={{ color: 'green' }}><FavoritedIcon /></span>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <h6 className="bold-text">Consultant:</h6>
            Bob<p />
            <h6 className="bold-text">Due Date:</h6>
            7/27/2019<p />
            <h6 className="bold-text">Risk rating:</h6>
            Low (893)<p />
            <h6 className="bold-text">Findings: 1695</h6>
            <FindingsBar />
          </Col>
          <Col>
            <h6 className="bold-text" style={{ float: 'left' }}>PARTNER MOBILE APP</h6>
            <h6>&nbsp;&nbsp;&nbsp;v19.2</h6>
            <p />
            <Badge pill><CompletedIcon /></Badge>&nbsp;
            <Badge pill><CompletedIcon /></Badge>&nbsp;
            <Badge pill><CompletedIcon /> Risk model</Badge>
            <p />
            <span className="bold-text">Risk Rating:</span> 98.3
            <p />&nbsp;
            <p />
            <h6 className="bold-text" style={{ float: 'left' }}>VENDOR REGISTRATION APP</h6>
            <h6>&nbsp;&nbsp;&nbsp;v1.02</h6>
            <p />
            <Badge pill color="success"><InProgressIcon /> Intake</Badge>
            <p />
            <span className="bold-text">Risk Rating:</span> TBD
          </Col>
          <Col>
            <h6 className="bold-text" style={{ float: 'left' }}>CUSTOMER PORTAL</h6>
            <h6>&nbsp;&nbsp;&nbsp;v2.14</h6>
            <p />
            <Badge pill color="success"><InProgressIcon /> Onboarding</Badge>&nbsp;
            <Badge pill>2</Badge>&nbsp;
            <Badge pill>3</Badge>
            <p />
            <span className="bold-text">Risk Rating:</span> TBD
          </Col>
        </Row>
      </CardBody>
    </Card>
    <Card>
      <CardBody>
        <Row>
          <Col>
            <h4>CRM Update</h4>
            #1514
            <p />
            <div className="progress-wrap progress-wrap--middle">
              <Progress value={50} />
            </div>
          </Col>
          <Col>
            &nbsp;
          </Col>
          <Col align="right">
          `<span style={{ color: 'green' }}><FavoriteIcon /></span>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <h6 className="bold-text">Consultant:</h6>
            Chandra<p />
            <h6 className="bold-text">Due Date:</h6>
            3/21/2020<p />
            <h6 className="bold-text">Risk rating:</h6>
            TBD<p />
            <h6 className="bold-text">Findings: 782</h6>
            <FindingsBar />
          </Col>
          <Col>
            <h6 className="bold-text" style={{ float: 'left' }}>PARTNER MOBILE APP</h6>
            <h6>&nbsp;&nbsp;&nbsp;v19.1.4</h6>
            <p />
            <Badge pill><CompletedIcon /></Badge>&nbsp;
            <Badge pill color="success"><InProgressIcon /> Offboarding</Badge>&nbsp;
            <Badge pill>3</Badge>
            <p />
            <span className="bold-text">Risk Rating:</span> TBD
          </Col>
          <Col>
            &nbsp;
          </Col>
        </Row>
      </CardBody>
    </Card>
  </div>
);

export default EngagementDataTable;
