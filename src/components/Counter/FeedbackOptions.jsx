import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ onGood, onNeutral, onBad }) => (
  <div className="FeedbackField">
    <div className="FeedbackField__btn">
      <button type="button" onClick={onGood}>
        Good
      </button>
      <button type="button" onClick={onNeutral}>
        Neutral
      </button>
      <button type="button" onClick={onBad}>
        Bad
      </button>
    </div>
  </div>
);

FeedbackOptions.propTypes = {
  onGood: PropTypes.func,
  onNeutral: PropTypes.func,
  onBad: PropTypes.func,
};

export default FeedbackOptions;
