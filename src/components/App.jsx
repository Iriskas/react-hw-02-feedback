import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOption/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from 'components/Notification/Notification';
import css from 'components/App.module.css';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handlIncrement = e => {
    const { name } = e.target;

    switch (name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const countPositiveFeedbackPercentage = () => {
    return good ? Math.round((good / countTotalFeedback()) * 100) : 0;
  };
  return (
    <div className={css.app}>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handlIncrement}
        />
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification message={'There is no feedback'} />
        )}
      </Section>
    </div>
  );
};

//import React, { Component } from 'react';
//import { FeedbackOptions } from './FeedbackOption/FeedbackOptions';
//import { Statistics } from './Statistics/Statistics';
//import { Section } from './Section/Section';
//import { Notification } from 'components/Notification/Notification';

//import css from 'components/App.module.css';
//export class App extends Component {
//state = {
//good: 0,
//neutral: 0,
//bad: 0,
//};

//handlIncrement = e => {
//const { name } = e.target;

//this.setState(prevState => ({
//  [name]: prevState[name] + 1,
//}));
//};
//countTotalFeedback = () =>
//this.state.good + this.state.neutral + this.state.bad;

//countPositiveFeedbackPercentage = () =>
//this.countTotalFeedback()
// ? Math.round((this.state.good / this.countTotalFeedback()) * 100)
//: 0;

//render() {
//const { good, neutral, bad } = this.state;
//return (
//<div className={css.app}>
//<Section title={'Please leave feedback'}>
//<FeedbackOptions
//options={Object.keys(this.state)}
//onLeaveFeedback={this.handlIncrement}
///>
// {this.countTotalFeedback() ? (
// <Statistics
// good={good}
//neutral={neutral}
// bad={bad}
//total={this.countTotalFeedback}
//positivePercentage={this.countPositiveFeedbackPercentage}
///>
//) : (
//<Notification message={'There is no feedback'} />
//)}
//</Section>
//</div>
//);
//}
//}
