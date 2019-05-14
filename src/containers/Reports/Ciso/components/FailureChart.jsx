/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
  PieChart, Pie, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';
import PropTypes from 'prop-types';
import Panel from '../../../../shared/components/Panel';

const data01 = [{ name: 'Online', value: 12934, fill: '#4ce1b6' },
  { name: 'Professional', value: 9934, fill: '#70bbfd' },
  { name: 'Internal', value: 20432, fill: '#f6da6e' },
  { name: 'Others', value: 15432, fill: '#ff4861' }];

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
    title="Failed Engagements"
    subhead="By Business Unit"
  >
    <div className="dashboard__visitors-chart">
      <p className="dashboard__visitors-chart-title">Last Year</p>
      <p className="dashboard__visitors-chart-number">34</p>
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
