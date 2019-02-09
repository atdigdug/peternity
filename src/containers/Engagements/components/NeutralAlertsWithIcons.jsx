import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import Alert from '../../../shared/components/Alert';

const NeutralAlertsWithIcons = () => (
  <Col md={12} lg={12} xl={12}>
    <Card>
      <CardBody>
        <div className="card__title">
          <h5 className="bold-text">Active Engagements</h5>
          <h5 className="subhead">You have 3 active engagements</h5>
        </div>
        <NavLink to="/engagements/detail">
          <Alert color="warning" className="alert--neutral" icon>
            <p><span className="bold-text">Engagement 1: </span>
              This is what you have to do next.
            </p>
          </Alert>
        </NavLink>
        <Alert color="info" className="alert--neutral" icon>
          <p><span className="bold-text">Engagement 2: </span>
            This is what you have to do next.
          </p>
        </Alert>
        <Alert color="danger" className="alert--neutral" icon>
          <p><span className="bold-text">Engagement 3: </span>
            This is what you have to do next.
          </p>
        </Alert>
      </CardBody>
    </Card>
  </Col>
);

export default NeutralAlertsWithIcons;
