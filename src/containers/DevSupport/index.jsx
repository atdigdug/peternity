import React from 'react';
import { Col, Container, Row, Card, CardBody, Button } from 'reactstrap';
import Table from './components/DataTable';

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
                  <Col xl="2">
                    <div className="form__form-group-field">
                      <input />
                    </div>
                  </Col>
                  <Col xl="1">
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
            System displays an error message Eg: Unable to update the record.
            But according to functionality system should update the updated record.
            This particular defect occurs in version 9.2.
            This particular defect also found in other modules.
            Inconsistency of application while reproducing the defect.
          </CardBody>
        </Card>
      </Col>
      <Col>
        <Card>
          <CardBody>
            <div className="card__title">
              <h5 className="bold-text">Metrics</h5>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default ScansDetail;
