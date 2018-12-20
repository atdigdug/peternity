import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import Alert from '../../../../shared/components/Alert';

const NeutralAlertsWithIcons = () => (
  <Col md={12} lg={12} xl={12}>
    <Card>
      <CardBody>
        <div className="card__title">
          <h5 className="bold-text">Smart Actions</h5>
          <h5 className="subhead">Items for you to follow-up ...</h5>
        </div>
        <Alert color="warning" className="alert--neutral" icon>
          <p><span className="bold-text">Findings need attention. </span>
            Scan for Amara Application was completed 9 hours ago.
          </p>
        </Alert>
        <Alert color="warning" className="alert--neutral" icon>
          <p><span className="bold-text">Application intake needs completion. </span>
            The Bumati Application has no scans scheduled.
          </p>
        </Alert>
        <Alert color="warning" className="alert--neutral" icon>
          <p><span className="bold-text">Engagement intake needs completion. </span>
            Engagement1 has no application or modules assigned.
          </p>
        </Alert>
      </CardBody>
    </Card>
  </Col>
);

export default NeutralAlertsWithIcons;
