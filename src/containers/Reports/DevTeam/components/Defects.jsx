/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
  PieChart, Pie, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';
import PropTypes from 'prop-types';
import Panel from '../../../../shared/components/Panel';

const data01 = [{ name: 'Chrome', value: 12934, fill: '#4ce1b6' },
  { name: 'Safari', value: 9934, fill: '#70bbfd' },
  { name: 'Mozilla', value: 20432, fill: '#f6da6e' },
  { name: 'IE', value: 15432, fill: '#ff4861' }];

const style = {
  left: 0,
  width: 150,
  lineHeight: '24px',
};

const renderLegend = ({ payload }) => (
  <ul className="dashboard__chart-legend">
    {
      payload.map((entry, index) => (
        <li key={`item-${index}`}><span style={{ backgroundColor: entry.color }} />{entry.value}</li>
      ))
    }
  </ul>
);

renderLegend.propTypes = {
  payload: PropTypes.arrayOf(PropTypes.shape({
    color: PropTypes.string,
    vslue: PropTypes.string,
  })).isRequired,
};

const VisitorsSessions = () => (
  <Panel
    lg={6}
    xl={6}
    md={12}
    title="Defects"
    subhead="by Priority"
  >
    <div className="dashboard__visitors-chart">
      <p className="dashboard__visitors-chart-title">Total Defects <span>on 23.08.2017</span></p>
      <p className="dashboard__visitors-chart-number">12,384</p>
      <ResponsiveContainer className="dashboard__chart-pie" width="100%" height={220}>
        <PieChart className="dashboard__chart-pie-container">
          <Tooltip />
          <Pie data={data01} dataKey="value" cy={110} innerRadius={70} outerRadius={100} />
          <Legend layout="vertical" verticalAlign="bottom" wrapperStyle={style} content={renderLegend} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  </Panel>
);

export default VisitorsSessions;
