import "./Weight.css";

const Weight = ({ kg, lbs }) => {
  return (
    <div className="weight__container">
      <h2>{kg} KG</h2>
      <p className="weight__dividericon">|</p>
      <h2>{lbs} LB</h2>
    </div>
  );
};

export default Weight;
