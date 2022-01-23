import { useState, useContext } from "react";
import Rating from "../components/Rating";
import FeedbackContext from "../context/FeedbackContext";
import { useNavigate } from "react-router-dom";

const NewFeedbackPage = () => {
  const { addFeedback } = useContext(FeedbackContext);
  const navigate = useNavigate();

  const [rating, setRating] = useState(null);
  const [ratingCached, setRatingCached] = useState(null);
  const [halfStar, setHalfStar] = useState(false);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [comment, setComment] = useState("");

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
      setBtnDisabled(true);
    } else {
      setRatingCached(rating);
      setBtnDisabled(false);
    }
  };

  const handleBtnClick = () => {
    addFeedback({ rating: ratingCached, comment });
    navigate("/");
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
        value={comment}
        onChange={(e) => {
          setComment(e.target.value);
        }}
      />
      <button className="btn" disabled={btnDisabled} onClick={handleBtnClick}>
        Submit review
      </button>
    </div>
  );
};

export default NewFeedbackPage;
