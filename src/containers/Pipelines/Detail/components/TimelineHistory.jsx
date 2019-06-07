import React from 'react';
import { Col } from 'reactstrap';
import TimeLineItem from '../../../../shared/components/TimeLineItem';

const TimelineHistory = () => (
  <Col md={12}>
    <div className="timeline">
      <TimeLineItem type="work" title="Onboarding" date="6/1/2019 12:03pm">
        <p>WhiteHat : Partner Mobile App</p>
      </TimeLineItem>
      <TimeLineItem type="work" title="Onboarding" date="6/1/2019 12:06pm">
        <p>CheckMarx : Partner Mobile App</p>
        <p>Error! Fix error.</p>
      </TimeLineItem>
      <TimeLineItem type="work" title="Scanning" date="6/1/2019 12:11pm">
        <p>WhiteHat : Partner Mobile App</p>
      </TimeLineItem>
      <TimeLineItem type="work" title="Offboarding" date="6/1/2019 12:31pm">
        <p>WhiteHat : Partner Mobile App</p>
      </TimeLineItem>
      <TimeLineItem type="work" title="Onboarding" date="6/1/2019 1:19pm">
        <p>Veracode : Partner Mobile App</p>
      </TimeLineItem>
      <TimeLineItem type="work" title="Scanning" date="6/1/2019 1:22pm">
        <p>Veracode : Partner Mobile App</p>
      </TimeLineItem>
    </div>
  </Col>
);

export default TimelineHistory;
