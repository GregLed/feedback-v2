import { Link } from "react-router-dom";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
import Spinner from "../components/Spinner";
import Review from "../components/Review";

const SummaryPage = () => {
  const { feedback, isLoading } = useContext(FeedbackContext);

  return isLoading ? (
    <Spinner />
  ) : (
    <div className="card active">
      <h2>The Minimalist Entrepreneur</h2>
      <div className="card-header">
        <div className="total-rating"></div>
        <Link to="/new" className="btn">
          Add review
        </Link>
      </div>
      <div className="reviews">
        <h3>Reviews</h3>
        {!feedback || feedback.length === 0 ? (
          <p>No feedback yet</p>
        ) : (
          feedback.map((item) => (
            <Review rating={item.rating} comment={item.comment} />
          ))
        )}
      </div>
    </div>
  );
};

export default SummaryPage;
