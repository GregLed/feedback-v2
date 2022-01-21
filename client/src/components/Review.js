import PropTypes from "prop-types";
import Rating from "./Rating";

const Review = ({ rating, comment }) => {
  return (
    <div className="review">
      <Rating value={rating} />
      <div className="comment">
        <strong>{rating}</strong>, {comment}
      </div>
    </div>
  );
};

Review.propTypes = {
  rating: PropTypes.number.isRequired,
  comment: PropTypes.string,
};

export default Review;
