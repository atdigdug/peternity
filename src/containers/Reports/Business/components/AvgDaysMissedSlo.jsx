import React from 'react';
import { PieChart, Pie, ResponsiveContainer } from 'recharts';
import { Card, CardBody, Col } from 'reactstrap';
import MapMarkerRadiusIcon from 'mdi-react/CallMissedIcon';

const data = [{ value: 3.8, fill: '#70bbfd' },
  { value: 0.2, fill: '#eeeeee' }];

const Distance = () => (
  <Col md={12} xl={3} lg={6} sm={12} xs={12}>
    <Card>
      <CardBody className="dashboard__health-chart-card">
        <div className="card__title">
          <h5 className="bold-text">Average Days Missed SLO</h5>
        </div>
        <div className="dashboard__health-chart">
          <ResponsiveContainer height={180}>
            <PieChart>
              <Pie data={data} dataKey="value" cy={85} innerRadius={80} outerRadius={90} />
            </PieChart>
          </ResponsiveContainer>
          <div className="dashboard__health-chart-info">
            <MapMarkerRadiusIcon style={{ fill: '#70bbfd' }} />
            <p className="dashboard__health-chart-number">101</p>
            <p className="dashboard__health-chart-units">days</p>
          </div>
        </div>
      </CardBody>
    </Card>
  </Col>
);

export default Distance;
