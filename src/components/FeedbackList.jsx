import React from "react";
import FeedbackItem from "./FeedbackItem";
import PropTypes from "prop-types";

function FeedbackList({ feedback, handleDelete }) {
  return (
    <div>
      {feedback.map((item, index) => {
        return (
          <FeedbackItem key={index} item={item} handleDelete={handleDelete} />
        );
      })}
    </div>
  );
}

FeedbackList.propTypes = {
  feedback: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }),
};

export default FeedbackList;
