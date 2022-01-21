import PropTypes from "prop-types";
import { FaStar, FaStarHalf } from "react-icons/fa";

const Rating = ({ value, colorFilled, colorEmpty }) => {
  const filledStar = <FaStar style={{ color: colorFilled, width: "18px" }} />;
  const halfFilledStar = (
    <span className="halfstar-container">
      <FaStarHalf
        className="halfstar"
        style={{ color: colorFilled, width: "18px" }}
      />
      <FaStar
        className="backgroud-star"
        style={{ color: colorEmpty, width: "18px" }}
      />
    </span>
  );
  const emptyStar = <FaStar style={{ color: colorEmpty, width: "18px" }} />;

  return (
    <div className="stars">
      <span>
        {value >= 1 ? filledStar : value >= 0.5 ? halfFilledStar : emptyStar}
      </span>

      <span>
        {value >= 2 ? filledStar : value >= 1.5 ? halfFilledStar : emptyStar}
      </span>

      <span>
        {value >= 3 ? filledStar : value >= 2.5 ? halfFilledStar : emptyStar}
      </span>

      <span>
        {value >= 4 ? filledStar : value >= 3.5 ? halfFilledStar : emptyStar}
      </span>

      <span>
        {value >= 5 ? filledStar : value >= 4.5 ? halfFilledStar : emptyStar}
      </span>
    </div>
  );
};

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  colorFilled: PropTypes.string,
  colorEmpty: PropTypes.string,
};

Rating.defaultProps = {
  colorFilled: "#f8e825",
  colorEmpty: "#bebebe",
};

export default Rating;
