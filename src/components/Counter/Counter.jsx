import React from 'react';
import Statistics from './Statistics';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';

import './Counter.scss';

class Counter extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    percentegeGoodFeedback: 0,
  };

  goodBtn = () => {
    this.setState({
      good: this.state.good + 1,
    });
    this.countTotalFeedback();
  };

  neutralBtn = () => {
    this.setState({
      neutral: this.state.neutral + 1,
    });
    this.countTotalFeedback();
  };

  badBtn = () => {
    this.setState({
      bad: this.state.bad + 1,
    });
    this.countTotalFeedback();
  };

  countTotalFeedback = () => {
    this.setState({ total: this.state.total + 1 }, () =>
      this.countPositiveFeedbackPercentage()
    );
  };
  countPositiveFeedbackPercentage = () => {
    this.setState({
      percentegeGoodFeedback: Math.round(
        (this.state.good * 100) / this.state.total
      ),
    });
  };

  feedbackBtns = () => (
    <FeedbackOptions
      onGood={this.goodBtn}
      onNeutral={this.neutralBtn}
      onBad={this.badBtn}
    />
  );

  statisticsField = () => (
    <Statistics
      good={this.state.good}
      neutral={this.state.neutral}
      bad={this.state.bad}
      total={this.state.total}
      percentegeGoodFeedback={this.state.percentegeGoodFeedback}
    />
  );

  render() {
    return (
      <div className="Counter">
        <Section title="Please leave feedback" children={this.feedbackBtns} />
        <Section title="Statistics" children={this.statisticsField} />
      </div>
    );
  }
}

export default Counter;
