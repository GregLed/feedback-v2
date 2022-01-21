import PropTypes from "prop-types";

const Review = ({ rating, comment }) => {
  return (
    <div className="review">
      <div className="stars"></div>
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
