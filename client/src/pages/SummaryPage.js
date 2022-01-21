import { Link } from "react-router-dom";

const SummaryPage = () => {
  return (
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
      </div>
    </div>
  );
};

export default SummaryPage;
