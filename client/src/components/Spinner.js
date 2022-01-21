import { FaSpinner } from "react-icons/fa";

const Spinner = () => {
  return (
    <FaSpinner
      icon="spinner"
      className="spinner"
      style={{
        width: "100px",
        height: "100px",
        margin: "10rem auto",
        display: "block",
      }}
    />
  );
};

export default Spinner;
