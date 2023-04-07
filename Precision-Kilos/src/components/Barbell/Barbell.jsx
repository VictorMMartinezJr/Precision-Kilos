import "./Barbell.css";
import barbellSvg from "../../../public/barbell.svg";
import ClearBtn from "../ClearBtn/ClearBtn";
import { useRef, useEffect, useContext } from "react";
import { WeightsContext } from "../WeightsContext";

const Barbell = () => {
  const { platesOnBar, setSpaceOnBar } = useContext(WeightsContext);
  const kilosContainer = useRef(null);
  const kilo = useRef(null);
  useEffect(() => {
    const barbellWidth = kilo.current.getBoundingClientRect().width;
    const barbellContainerWidth =
      kilosContainer.current.getBoundingClientRect().width - 8;

    if (barbellWidth >= barbellContainerWidth) {
      setSpaceOnBar(false);
      return;
    }
  }, [platesOnBar]);

  return (
    <div className="barbell__container">
      <ClearBtn />
      <div className="barbell__img__container">
        <img src={barbellSvg} alt="barbell" className="barbellsvg" />
        <div className="kilos__container" ref={kilosContainer}>
          <ul className="kilos" ref={kilo}>
            {platesOnBar.map((p, i) => {
              return (
                <li
                  className="kilo"
                  style={{
                    height: p.height,
                    width: p.width,
                    backgroundColor: p.color,
                  }}
                  key={i}
                ></li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Barbell;
