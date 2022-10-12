import React from 'react';

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

export default FeedbackOptions;
