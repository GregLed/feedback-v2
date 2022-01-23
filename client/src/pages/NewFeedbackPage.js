import { useState } from "react";
import Rating from "../components/Rating";

const NewFeedbackPage = () => {
  const [rating, setRating] = useState(null);
  const [ratingCached, setRatingCached] = useState(null);
  const [halfStar, setHalfStar] = useState(false);

  const onMouseMove = (e) => {
    // Get position within start element
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left; //x position within the element.

    // If x position less than 10px, user selected half star rating
    if (x < 10) {
      setHalfStar(true);
    } else {
      setHalfStar(false);
    }

    let rtn = +e.target.parentElement.id;
    if (halfStar) {
      rtn -= 0.5;
    }

    setRating(rtn);
  };

  const onMouseLeave = () => {
    if (ratingCached) {
      setRating(ratingCached);
    } else {
      setRating(null);
    }
    setHalfStar(false);
  };

  const onClick = () => {
    // If user clicked cached rating, we reset it
    if (ratingCached === rating) {
      setRating(null);
      setRatingCached(null);
    } else {
      setRatingCached(rating);
    }
  };

  return (
    <div className="new-review">
      <h2>What's your rating?</h2>
      <p>Rating</p>
      <div className="stars">
        <Rating
          value={rating == null ? 0 : rating}
          onMouseMove={onMouseMove}
          onMouseLeave={onMouseLeave}
          onClick={onClick}
        />
      </div>
      <label htmlFor="user-comment">Review</label>
      <input
        type="text"
        name="comment"
        id="user-comment"
        placeholder="Start typing..."
      />
      <button className="btn" id="submit-btn" disabled>
        Submit review
      </button>
    </div>
  );
};

export default NewFeedbackPage;
