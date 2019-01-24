import React from 'react';
import { PieChart, Pie, ResponsiveContainer } from 'recharts';
import { Card, CardBody, Col } from 'reactstrap';
import HeartOutlineIcon from 'mdi-react/CalendarIcon';

const data = [{ value: 274, fill: '#ff4861' },
  { value: 664, fill: '#eeeeee' }];

const Issues2bCompleted = () => (
  <Col md={12} xl={6} lg={6} sm={12} xs={12}>
    <Card>
      <CardBody className="dashboard__health-chart-card">
        <div className="card__title">
          <h5 className="bold-text">Issues to be Completed by end-of-month</h5>
        </div>
        <div className="dashboard__health-chart">
          <ResponsiveContainer height={180}>
            <PieChart>
              <Pie data={data} dataKey="value" cy={85} innerRadius={80} outerRadius={90} />
            </PieChart>
          </ResponsiveContainer>
          <div className="dashboard__health-chart-info">
            <HeartOutlineIcon style={{ fill: '#ff4861' }} />
            <p className="dashboard__health-chart-number">274</p>
            <p className="dashboard__health-chart-units">to be completed</p>
          </div>
        </div>
        <p className="dashboard__goal">Open Issues: 938</p>
      </CardBody>
    </Card>
  </Col>
);

export default Issues2bCompleted;
