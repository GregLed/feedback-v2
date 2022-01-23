import PropTypes from "prop-types";

const Rating = ({
  value,
  colorFilled,
  colorEmpty,
  onMouseMove,
  onMouseLeave,
  onClick,
}) => {
  const filledStar = (
    <i style={{ color: colorFilled }} className="fas fa-star"></i>
  );
  const halfFilledStar = (
    <>
      <i
        style={{ color: colorFilled }}
        className="fas fa-star-half halfstar"
      ></i>
      <i
        style={{ color: colorEmpty }}
        className="fas fa-star background-star"
      ></i>
    </>
  );
  const emptyStar = (
    <i style={{ color: colorEmpty }} className="fas fa-star"></i>
  );

  return (
    <div className="stars">
      <span
        id="1"
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
      >
        {value >= 1 ? filledStar : value >= 0.5 ? halfFilledStar : emptyStar}
      </span>

      <span
        id="2"
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
      >
        {value >= 2 ? filledStar : value >= 1.5 ? halfFilledStar : emptyStar}
      </span>

      <span
        id="3"
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
      >
        {value >= 3 ? filledStar : value >= 2.5 ? halfFilledStar : emptyStar}
      </span>

      <span
        id="4"
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
      >
        {value >= 4 ? filledStar : value >= 3.5 ? halfFilledStar : emptyStar}
      </span>

      <span
        id="5"
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
      >
        {value >= 5 ? filledStar : value >= 4.5 ? halfFilledStar : emptyStar}
      </span>
    </div>
  );
};

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  colorFilled: PropTypes.string,
  colorEmpty: PropTypes.string,
  onMouseMove: PropTypes.func,
};

Rating.defaultProps = {
  colorFilled: "#f8e825",
  colorEmpty: "#bebebe",
};

export default Rating;
