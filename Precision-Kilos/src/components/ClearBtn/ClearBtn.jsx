import { WeightsContext } from "../WeightsContext";
import "./ClearBtn.css";
import { useContext } from "react";

const ClearBtn = () => {
  const { setLbWeight, setKiloWeight, setPlatesOnBar } =
    useContext(WeightsContext);

  const resetWeights = () => {
    setKiloWeight(20);
    setLbWeight(45);
  };

  const clearBar = () => {
    setPlatesOnBar([]);
    resetWeights();
  };
  return (
    <button className="btn__clear" onClick={clearBar}>
      Clear
    </button>
  );
};

export default ClearBtn;
