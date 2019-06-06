import React from 'react';
import {
  Col, Container, Row, Card, CardBody, Button,
} from 'reactstrap';
import StatusTable from './components/StatusTable';
import Timeline from './components/TimelineHistory';

const ScansDetail = () => (
  <Container>
    <Row>
      <Col md={12}>
        <h3 className="page-title">Pipelines</h3>
      </Col>
    </Row>
    <div className="card__title">
      <h5 className="bold-text">Tabular</h5>
    </div>
    <Row>
      <Col>
        <Card>
          <CardBody>
            <StatusTable />
          </CardBody>
        </Card>
      </Col>
    </Row>
    <div className="card__title">
      <h5 className="bold-text">Columnar</h5>
    </div>
    <Row>
      <Col>
        2946
      </Col>
      <Col>
        <Card>
          <CardBody>
            <div className="card__title">
              <h5 className="bold-text">Knowledge Base</h5>
            </div>
            <form className="form">
              <div className="form__form-group">
                <Row>
                  <Col xl="6">
                    <div className="form__form-group-field">
                      <input />
                    </div>
                  </Col>
                  <Col xl="6">
                    <Button color="primary" type="submit">Search</Button>
                  </Col>
                </Row>
              </div>
            </form>
            <h5 className="bold-text">Bookmarks</h5>
            Link 1 | Link 2 | Link 3
            <p />
            <h5 className="bold-text">Most Recent</h5>
            Link 1 | Link 2 | Link 3
          </CardBody>
        </Card>
      </Col>
      <Col>
        <Card>
          <CardBody>
            <div className="card__title">
              <h5 className="bold-text">Metrics</h5>
            </div>
            Time spent: 13 hours 5 minutes.
            <p />
          </CardBody>
        </Card>
      </Col>
      <Col>
        Offboard
      </Col>
    </Row>
    <div className="card__title">
      <h5 className="bold-text">Timeline</h5>
    </div>
    <Row>
      <Col>
        <Card>
          <CardBody>
            <Timeline />
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default ScansDetail;
