import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import {
  RadialBarChart, RadialBar, Legend, Tooltip, ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Pri 0', uv: 60, pv: 2400, fill: '#8884d8',
  },
  {
    name: 'Pri 1', uv: 100, pv: 4567, fill: '#83a6ed',
  },
  {
    name: 'Pri 2', uv: 156, pv: 1398, fill: '#8dd1e1',
  },
  {
    name: 'Pri 3', uv: 822, pv: 9800, fill: '#82ca9d',
  },
  {
    name: 'TBD', uv: 667, pv: 4800, fill: '#ffc658',
  },
];

const style = {
  lineHeight: '24px',
};

const SimpleRadialBarChart = () => (
  <Col xs={12} md={12} lg={6} xl={6}>
    <Card>
      <CardBody>
        <div className="card__title">
          <h5 className="bold-text">Findings</h5>
        </div>
        <ResponsiveContainer height={320}>
          <RadialBarChart cy={130} innerRadius={10} outerRadius={140} barSize={10} data={data}>
            <Tooltip />
            <RadialBar minAngle={15} background clockWise dataKey="uv" />
            <Legend iconSize={10} wrapperStyle={style} />
          </RadialBarChart>
        </ResponsiveContainer>
      </CardBody>
    </Card>
  </Col>
);

export default SimpleRadialBarChart;
