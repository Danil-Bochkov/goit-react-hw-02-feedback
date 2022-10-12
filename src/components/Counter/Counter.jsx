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
  };

  goodBtn = () =>
    this.setState(prevState => {
      return { good: prevState.good + 1 };
    });
  neutralBtn = () =>
    this.setState(prevState => {
      return { neutral: prevState.neutral + 1 };
    });
  badBtn = () =>
    this.setState(prevState => {
      return { bad: prevState.bad + 1 };
    });

  countTotalFeedback = () =>
    this.state.good + this.state.neutral + this.state.bad;
  countPositiveFeedbackPercentage = () =>
    Math.round((this.state.good * 100) / this.countTotalFeedback());

  render() {
    return (
      <div className="Counter">
        <Section title="Please leave feedback">
          <FeedbackOptions
            onGood={this.goodBtn}
            onNeutral={this.neutralBtn}
            onBad={this.badBtn}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            percentegeGoodFeedback={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </div>
    );
  }
}

export default Counter;
