import "./Weight.css";
import { useContext } from "react";
import { WeightsContext } from "../WeightsContext";

const Weight = () => {
  const { kiloWeight, lbWeight, spaceOnBar } = useContext(WeightsContext);
  return (
    <div className="weight__container">
      <h2 className="weight__number">{kiloWeight} KG</h2>
      <p className="weight__dividericon">|</p>
      <h2 className="weight__number">{lbWeight} LB</h2>
      <p className={`weight__maxed ${spaceOnBar && "hidden"}`}>
        Bar is maxed out!
      </p>
    </div>
  );
};

export default Weight;
