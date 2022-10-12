import React from 'react';
import PropTypes from 'prop-types';
import Notification from './Notification';

const Statistics = ({ good, neutral, bad, total, percentegeGoodFeedback }) => (
  <div className="StatisticsField">
    {total === 0 ? (
      <Notification message="There is no feedback" />
    ) : (
      <div className="Statistics__values">
        <span>Good: {good}</span>
        <span>Neutral: {neutral}</span>
        <span>Bad: {bad}</span>
        <span>Total: {total}</span>
        <span>Positive feedback: {percentegeGoodFeedback}%</span>
      </div>
    )}
  </div>
);

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  percentegeGoodFeedback: PropTypes.number,
};

export default Statistics;
