import React, { useState } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";

function FeedbackForm({ handleAdd }) {
  const [text, setText] = useState("");
  const [rating, setRating] = useState();
  const [btnDisable, setBtnDisable] = useState(true);
  const [message, setMessage] = useState("");

  const handleTextChange = (e) => {
    if (text === "") {
      setBtnDisable(true);
      setMessage(null);
    } else if (text !== "" && text.length <= 10) {
      setBtnDisable(true);
      setMessage("Text must be at least 10 characters");
    } else {
      setBtnDisable(false);
      setMessage("");
    }
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.length > 10) {
      const newFeedback = {
        text,
        rating,
      };

      handleAdd(newFeedback);
      setText("");
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How wold you rate your sevices with us</h2>
        {/* @todo - rating select component  */}
        <RatingSelect
          select={(rating) => {
            setRating(rating);
          }}
          selected={rating}
        />
        <div className="input-group">
          <input
            type="text"
            onChange={handleTextChange}
            placeholder="Enter a review"
            value={text}
          />
          <Button type="submit" isDisabled={btnDisable}>
            Send
          </Button>
        </div>

        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
