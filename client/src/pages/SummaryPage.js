import { Link } from "react-router-dom";
import { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FeedbackContext from "../context/FeedbackContext";
import Spinner from "../components/Spinner";
import Review from "../components/Review";
import Rating from "../components/Rating";

const SummaryPage = () => {
  const { feedback, isLoading } = useContext(FeedbackContext);

  // Calculate and update average rating
  const average =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length;

  // One decimal place only for page display (no zeros)
  const averageStr = average.toFixed(1).replace(/[.,]0$/, "");

  return isLoading ? (
    <Spinner />
  ) : (
    <div className="card active">
      <h2>The Minimalist Entrepreneur</h2>
      <div className="card-header">
        <div className="total-rating">
          <div className="num-rating">{averageStr}</div>
          <Rating value={average} />
        </div>
        <Link to="/new" className="btn">
          Add review
        </Link>
      </div>
      <div className="reviews">
        <h3>Reviews</h3>
        {!feedback || feedback.length === 0 ? (
          <p>No feedback yet</p>
        ) : (
          <AnimatePresence>
            {feedback.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.5,
                }}
                exit={{ opacity: 0 }}
              >
                <Review
                  key={item._id}
                  rating={item.rating}
                  comment={item.comment}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        )}
      </div>
    </div>
  );
};

export default SummaryPage;
