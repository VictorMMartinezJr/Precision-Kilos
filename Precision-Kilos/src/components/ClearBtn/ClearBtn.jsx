import { WeightsContext } from "../WeightsContext";
import "./ClearBtn.css";
import { useContext } from "react";

const ClearBtn = () => {
  const { setLbWeight, setKiloWeight, setPlatesOnBar, setSpaceOnBar } =
    useContext(WeightsContext);

  const resetWeights = () => {
    setKiloWeight(20);
    setLbWeight(45);
  };

  const resetSpaceOnBar = () => {
    setSpaceOnBar(true);
  };

  const resetBarToEmpty = () => {
    setPlatesOnBar([]);
  };

  const clearBar = () => {
    resetBarToEmpty();
    resetWeights();
    resetSpaceOnBar();
  };
  return (
    <button className="btn__clear" onClick={clearBar}>
      Clear
    </button>
  );
};

export default ClearBtn;
