import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import Alert from '../../../../shared/components/Alert';

const NeutralAlertsWithIcons = () => (
  <Col md={12} lg={12} xl={12}>
    <Card>
      <CardBody>
        <div className="card__title">
          <h5 className="bold-text">Scan Plan</h5>
          <h5 className="subhead">You have 2 plans setup</h5>
        </div>
        <Alert color="info" className="alert--neutral" icon>
          <p><span className="bold-text">WhiteHat: </span>
            Weekly on Thursdays at 14:00.
          </p>
        </Alert>
        <Alert color="info" className="alert--neutral" icon>
          <p><span className="bold-text">Nexus: </span>
            Daily at 09:00.
          </p>
        </Alert>
      </CardBody>
    </Card>
  </Col>
);

export default NeutralAlertsWithIcons;
