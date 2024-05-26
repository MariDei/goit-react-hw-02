import css from './Feedback.module.css';

const Feedback = ({ typeFeedback, totalFeedback, positiveFeedback }) => {
  return (
    <>
      <div className={css.wraper}>
        <p>
          Good: <span className={css.good}>{typeFeedback.good}</span>
        </p>
        <p>
          Neutral: <span className={css.neutral}>{typeFeedback.neutral}</span>
        </p>
        <p>
          Bad: <span className={css.bad}>{typeFeedback.bad}</span>
        </p>
        <p>Total: {totalFeedback}</p>
        <p>
          Positive: <span className={css.good}>{positiveFeedback}%</span>
        </p>
      </div>
    </>
  );
};

export default Feedback;
