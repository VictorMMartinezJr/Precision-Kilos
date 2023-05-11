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
    spaceOnBar,
    setSpaceOnBar,
  } = useContext(WeightsContext);

  const addWeight = (weightToAdd) => {
    let newWeight = weightToAdd * 2.2 + lbWeight;
    setLbWeight(Math.round(newWeight));
    setKiloWeight(weightToAdd + kiloWeight);
  };

  const roundUpChecker = (num) => {
    let newWeightStr = num.toString();
    let decimalIndex = newWeightStr.indexOf(".");
    if (decimalIndex === -1) {
      console.log("Return");
      return false;
    } else if (newWeightStr[decimalIndex + 1] === "5") {
      return true;
    }
    return false;
  };

  const subtractWeight = (weightToRemove) => {
    if (lbWeight > 45) {
      let newWeight = lbWeight - weightToRemove * 2.2;
      setKiloWeight(kiloWeight - weightToRemove);
      if (roundUpChecker(newWeight)) {
        setLbWeight(Math.floor(newWeight));
      } else {
        setLbWeight(Math.round(newWeight));
      }
    } else {
      setLbWeight(45);
    }
  };

  const addPlatesToBar = (weightToAdd, id, height, width, BGColor) => {
    if (spaceOnBar) {
      addWeight(weightToAdd);
      setPlatesOnBar([
        ...platesOnBar,
        {
          id: id,
          height: height,
          width: width,
          color: BGColor,
          plateNum: platesOnBar.length + 1,
        },
      ]);
    } else {
      return;
    }
  };

  const removePlatesFromBar = (weightToRemove, id) => {
    const plateToRemove = id;
    const index = platesOnBar.findLastIndex(
      (plate) => plate.id === plateToRemove
    );

    if (index !== -1) {
      platesOnBar.splice(index, 1);
      subtractWeight(weightToRemove);
    } else {
      return;
    }
    setSpaceOnBar(true);
  };

  return (
    <section id="plates__section">
      <div className="plates__content">
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
              removePlate={() => removePlatesFromBar(kilo.kilosToAdd, kilo.id)}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Plates;
