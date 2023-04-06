import { useContext, useEffect } from "react";
import "./Plates.css";
import kiloPlatesData from "../../platesdata.json";
import SinglePlate from "./SinglePlate/SinglePlate";
import { WeightsContext } from "../WeightsContext";

const Plates = () => {
  const {
    lbWeight,
    setLbWeight,
    kiloWeight,
    setKiloWeight,
    platesOnBar,
    setPlatesOnBar,
  } = useContext(WeightsContext);

  const addPlatesToBar = (weightToAdd, id, height, width, BGColor) => {
    let newWeight = weightToAdd * 2.2 + lbWeight;
    setLbWeight(newWeight);
    setKiloWeight(weightToAdd + kiloWeight);
    setPlatesOnBar([
      ...platesOnBar,
      { id: id, height: height, width: width, color: BGColor },
    ]);
  };

  const removePlatesFromBar = (weightToRemove) => {
    if (lbWeight > 45) {
      let newWeight = Math.round(lbWeight - weightToRemove * 2.2);
      setLbWeight(newWeight);
    } else {
      setLbWeight(45);
    }
  };

  console.log(`lb weight is ${lbWeight}`);

  return (
    <section id="plates__section">
      {kiloPlatesData.map((kilo) => {
        return (
          <SinglePlate
            key={kilo.id}
            BGColor={kilo.BGColor}
            kiloNumber={kilo.kiloNumber}
            addPlate={() =>
              addPlatesToBar(
                kilo.kilosToAdd,
                kilo.id,
                kilo.height,
                kilo.width,
                kilo.BGColor
              )
            }
            removePlate={() => removePlatesFromBar(kilo.kilosToAdd)}
          />
        );
      })}
    </section>
  );
};

export default Plates;
