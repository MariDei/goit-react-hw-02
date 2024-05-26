import { useState, useEffect } from 'react';
import Description from './Description/Description';
import Feedback from './Feedback/Feedback';
import Notification from './Notification/Notification';
import Options from './Options/Options';
import css from './App.module.css';

function App() {
  const initialFeedback = () => {
    const stateStored = localStorage.getItem('stateFeedback');
    if (stateStored) {
      return JSON.parse(stateStored);
    } else {
      return {
        good: 0,
        neutral: 0,
        bad: 0,
      };
    }
  };

  const [typeFeedback, setTypeFeedback] = useState(initialFeedback);

  const totalFeedback =
    typeFeedback.good + typeFeedback.neutral + typeFeedback.bad;
  const positiveFeedback = Math.round(
    (typeFeedback.good / totalFeedback) * 100
  );

  useEffect(() => {
    localStorage.setItem('stateFeedback', JSON.stringify(typeFeedback));
  }, [typeFeedback]);

  const updateFeedback = typeFeedback => {
    setTypeFeedback(prevTypeFeedback => ({
      ...prevTypeFeedback,
      [typeFeedback]: prevTypeFeedback[typeFeedback] + 1,
    }));
  };

  const handleReset = () => {
    setTypeFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <div className={css.container}>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        handleReset={handleReset}
      />
      {totalFeedback > 0 ? (
        <>
          <Feedback
            typeFeedback={typeFeedback}
            totalFeedback={totalFeedback}
            positiveFeedback={positiveFeedback}
          />
        </>
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default App;
