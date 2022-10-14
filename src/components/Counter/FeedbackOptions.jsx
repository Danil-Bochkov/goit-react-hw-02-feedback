import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ onClickBtns }) => (
  <div className="FeedbackField">
    <div className="FeedbackField__btn">
      <button type="button" onClick={() => onClickBtns('good')}>
        Good
      </button>
      <button type="button" onClick={() => onClickBtns('neutral')}>
        Neutral
      </button>
      <button type="button" onClick={() => onClickBtns('bad')}>
        Bad
      </button>
    </div>
  </div>
);

FeedbackOptions.propTypes = {
  onClickBtns: PropTypes.func,
};

export default FeedbackOptions;
