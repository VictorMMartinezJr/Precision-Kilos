import "./SinglePlate.css";

const SinglePlate = () => {
  return (
    <div className="singleplate">
      <p className="singleplate__text">25</p>
      <div className="singleplate__interactive">
        <button className="singleplate__btn">-</button>
        <p className="singleplate__interactive__number">0</p>
        <button className="singleplate__btn">+</button>
      </div>
      <p className="singleplate__text">KG</p>
    </div>
  );
};

export default SinglePlate;
