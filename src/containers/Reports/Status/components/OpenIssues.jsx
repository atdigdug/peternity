import React from 'react';
import { PieChart, Pie, ResponsiveContainer } from 'recharts';
import { Card, CardBody, Col } from 'reactstrap';
import HeartOutlineIcon from 'mdi-react/FormatListNumberedIcon';

const data = [{ value: 96, fill: '#4ce1b6' },
  { value: 889, fill: '#eeeeee' }];

const OpenIssues = () => (
  <Col md={12} xl={6} lg={6} sm={12} xs={12}>
    <Card>
      <CardBody className="dashboard__health-chart-card">
        <div className="card__title">
          <h5 className="bold-text">Open Issues</h5>
        </div>
        <div className="dashboard__health-chart">
          <ResponsiveContainer height={180}>
            <PieChart>
              <Pie data={data} dataKey="value" cy={85} innerRadius={80} outerRadius={90} />
            </PieChart>
          </ResponsiveContainer>
          <div className="dashboard__health-chart-info">
            <HeartOutlineIcon style={{ fill: '#4ce1b6' }} />
            <p className="dashboard__health-chart-number">96</p>
            <p className="dashboard__health-chart-units">issues</p>
          </div>
        </div>
        <p className="dashboard__goal">Total Issues: 985</p>
      </CardBody>
    </Card>
  </Col>
);

export default OpenIssues;