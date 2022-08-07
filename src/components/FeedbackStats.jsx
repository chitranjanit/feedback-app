function FeedbackStats({ feedback }) {
  // calcualte rating averages
  let average = feedback.reduce((acc, cur) => {
    return (acc + cur.rating) / feedback.length;
  }, 0);

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Averate Rating: {average}</h4>
    </div>
  );
}

export default FeedbackStats;
