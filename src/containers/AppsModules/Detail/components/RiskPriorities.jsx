/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
  PieChart, Pie, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';
import PropTypes from 'prop-types';

const data01 = [{ name: 'Priority 1', value: 10, fill: '#4ce1b6' },
  { name: 'Priority 2', value: 37, fill: '#70bbfd' },
  { name: 'Priority 3', value: 21, fill: '#f6da6e' },
  { name: 'Priority 4', value: 32, fill: '#ff4861' }];

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

const ActivityRating = () => (
  <ResponsiveContainer className="dashboard__chart-pie dashboard__chart-pie--fitness" width="100%" height={360}>
    <PieChart className="dashboard__chart-pie-container">
      <Tooltip />
      <Pie data={data01} dataKey="value" cy={100} innerRadius={30} outerRadius={70} label />
      <Legend wrapperStyle={style} content={renderLegend} />
    </PieChart>
  </ResponsiveContainer>
);

export default ActivityRating;
