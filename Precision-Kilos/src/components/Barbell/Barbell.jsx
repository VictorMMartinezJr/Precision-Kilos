import "./Barbell.css";
import barbellSvg from "../../../public/barbell.svg";
import ClearBtn from "../ClearBtn/ClearBtn";

const Barbell = () => {
  return (
    <div className="barbell__container">
      <ClearBtn />
      <img src={barbellSvg} alt="barbell" className="barbellsvg" />
    </div>
  );
};

export default Barbell;
