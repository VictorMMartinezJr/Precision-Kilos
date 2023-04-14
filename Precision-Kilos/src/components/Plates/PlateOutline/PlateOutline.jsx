import "./PlateOutline.css";

const PlateOutline = ({ borderColor }) => {
  return (
    <span
      className="plate__outline"
      style={{ borderColor: borderColor }}
    ></span>
  );
};

export default PlateOutline;
