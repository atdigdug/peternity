import React from 'react';
import {
  Progress, Card, CardBody, Row, Col,
} from 'reactstrap';
import FavoriteIcon from 'mdi-react/FavoriteIcon';
import Donut from '../Detail/components/SummaryDonut';

const EngagementDataTable = () => (
  <div>
    <Card>
      <CardBody>
        <Row>
          <Col>
            <h4>Merger Release</h4>
            6752
          </Col>
          <Col align="right">
            <FavoriteIcon /> Add to favorites
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <h6 className="bold-text">Due Date:</h6>
            7/27/2019<p />
            <h6 className="bold-text">Consultant:</h6>
            Bob<p />
            <h6 className="bold-text">Risk rating:</h6>
            Low (893)<p />
            <h6 className="bold-text">Progress:</h6>
            <p />
            <div className="progress-wrap progress-wrap--middle progress-wrap--blue">
              <Progress value={80} />
            </div>
          </Col>
          <Col>
            <h6 className="bold-text">Applications:</h6>
            <p />
            <h6 className="bold-text" style={{ float: 'left' }}>PARTNER MOBILE APP</h6>
            <h6>&nbsp;&nbsp;&nbsp;v19.2</h6>
            <p />
            <Row>
              <Col>
                <div className="progress-wrap progress-wrap--middle">
                  <Progress value={100} />
                </div>
              </Col>
              <Col>
                Findings: 531
              </Col>
            </Row>
            <p />
            <h6 className="bold-text" style={{ float: 'left' }}>VENDOR REGISTRATION APP</h6>
            <h6>&nbsp;&nbsp;&nbsp;v1.02</h6>
            <p />
            <Row>
              <Col>
                <div className="progress-wrap progress-wrap--middle progress-wrap--blue">
                  <Progress value={20} />
                </div>
              </Col>
              <Col>
                Findings: TBD
              </Col>
            </Row>
            <p />
            <h6 className="bold-text" style={{ float: 'left' }}>CUSTOMER PORTAL</h6>
            <h6>&nbsp;&nbsp;&nbsp;v2.14</h6>
            <p />
            <Row>
              <Col>
                <div className="progress-wrap progress-wrap--middle progress-wrap--blue">
                  <Progress value={80} />
                </div>
              </Col>
              <Col>
                Findings: 759
              </Col>
            </Row>
          </Col>
          <Col>
            <h6 className="bold-text">Findings risk:</h6>
            <Donut />
          </Col>
        </Row>
      </CardBody>
    </Card>
    <Card>
      <CardBody>
        <Row>
          <Col>
            <h4>CRM Update</h4>
            1514
          </Col>
          <Col align="right">
            <FavoriteIcon /> Favorite
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <h6 className="bold-text">Due Date:</h6>
            3/21/2020<p />
            <h6 className="bold-text">Consultant:</h6>
            Chandra<p />
            <h6 className="bold-text">Risk rating:</h6>
            High (153)<p />
            <h6 className="bold-text">Progress:</h6>
            <p />
            <div className="progress-wrap progress-wrap--middle progress-wrap--blue">
              <Progress value={80} />
            </div>
          </Col>
          <Col>
            <h6 className="bold-text">Applications:</h6>
            <p />
            <h6 className="bold-text" style={{ float: 'left' }}>PARTNER MOBILE APP</h6>
            <h6>&nbsp;&nbsp;&nbsp;v20.1</h6>
            <p />
            <Row>
              <Col>
                <div className="progress-wrap progress-wrap--middle progress-wrap--blue">
                  <Progress value={80} />
                </div>
              </Col>
              <Col>
                Findings: 1337
              </Col>
            </Row>
          </Col>
          <Col>
            <h6 className="bold-text">Findings risk:</h6>
            <Donut />
          </Col>
        </Row>
      </CardBody>
    </Card>
  </div>
);

export default EngagementDataTable;
