import endResultImage from "../../assets/endResult.svg";

import "./cantFind.css";

const CantFind = () => {
  return (
    <div className="ei289EndContainer">
      <img src={endResultImage} alt="end" className="ei345EndImage" />
      <h3>Oops...! Couldn't Find Anything</h3>
    </div>
  );
};

export default CantFind;
