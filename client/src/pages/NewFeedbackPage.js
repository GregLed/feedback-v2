import { FaStar } from "react-icons/fa";

const NewFeedbackPage = () => {
  return (
    <div className="new-review">
      <h2>What's your rating?</h2>
      <p>Rating</p>
      <div className="stars">
        <span className="picker" id="1">
          <FaStar style={{ color: "#bebebe", width: "18px" }} />
        </span>
        <span className="picker" id="2">
          <FaStar style={{ color: "#bebebe", width: "18px" }} />
        </span>
        <span className="picker" id="3">
          <FaStar style={{ color: "#bebebe", width: "18px" }} />
        </span>
        <span className="picker" id="4">
          <FaStar style={{ color: "#bebebe", width: "18px" }} />
        </span>
        <span className="picker" id="5">
          <FaStar style={{ color: "#bebebe", width: "18px" }} />
        </span>
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
