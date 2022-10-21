import { useState } from 'react';
import Buttons from './feedbakButtons';
import Statistic from './statistic';
import Section from './section';

function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const percentage = (100 * good) / totalFeedback;
    return percentage.toFixed(0);
  };

  const clickButton = buttonId => {
    switch (buttonId) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;
      default:
        return;
    }
  };

  const buttons = ['good', 'neutral', 'bad'];
  const totalFeedback = countTotalFeedback();

  return (
    <div>
      <Section
        title="Please leave feedback"
        children={<Buttons buttons={buttons} onFeedback={clickButton} />}
      />
      {totalFeedback > 0 ? (
        <Section
          title="Statistic"
          children={
            <Statistic
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          }
        />
      ) : (
        <Section title="Statistic" children={`No feedbacck given`} />
      )}
    </div>
  );
}

export default Feedback;
