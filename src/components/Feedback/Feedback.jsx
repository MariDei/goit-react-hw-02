const Feedback = ({ typeFeedback, totalFeedback, positiveFeedback }) => {
  return (
    <>
      <div>
        <p>Good: {typeFeedback.good}</p>
        <p>Neutral: {typeFeedback.neutral}</p>
        <p>Bad: {typeFeedback.bad}</p>
        <p>Total: {totalFeedback}</p>
        <p>Positive: {positiveFeedback}%</p>
      </div>
    </>
  );
};

export default Feedback;
