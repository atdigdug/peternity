import React from 'react';
import {
  Col, Container, Row, Card, CardBody, Button,
} from 'reactstrap';
import Table from './components/DataTable';
import IrritatingAggregate from './components/Irritating';

const ScansDetail = () => (
  <Container>
    <Row>
      <Col md={12}>
        <h3 className="page-title">Developer Support</h3>
      </Col>
    </Row>
    <Row>
      <Col>
        <Card>
          <CardBody>
            <form className="form">
              <div className="form__form-group">
                <Row>
                  <Col xl="4">
                    <div className="form__form-group-field">
                      <input />
                    </div>
                  </Col>
                  <Col xl="2">
                    <Button color="primary" type="submit">Search</Button>
                  </Col>
                </Row>
              </div>
            </form>
            <Table />
          </CardBody>
        </Card>
      </Col>
    </Row>
    <Row>
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
            <IrritatingAggregate />
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default ScansDetail;
