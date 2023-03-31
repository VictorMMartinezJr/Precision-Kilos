import { useState, createContext } from "react";

export const WeightsContext = createContext();

export const WeightsProvider = (props) => {
  const [lbWeight, setLbWeight] = useState(45);
  const [kiloWeight, setKiloWeight] = useState(20);

  return (
    <WeightsContext.Provider
      value={{ lbWeight, setLbWeight, kiloWeight, setKiloWeight }}
    >
      {props.children}
    </WeightsContext.Provider>
  );
};
