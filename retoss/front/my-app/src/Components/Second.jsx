import React from "react";
import "./Second.css";
import Star from "./StarSecond";

const Second = () => {
  return (
    <div className="secondContainer">
      <div className="rewiews rewiewsPart1">
        <Star />
        <h3> Rated 5 Stars in Reviews </h3>
      </div>

      <div className="rewiews  rewiewsPart2">
        <Star />
        <h3> Rated 5 Stars in Report Guru </h3>
      </div>

      <div className="rewiews ">
        <Star />
        <h3> Rated 5 Stars in BestTech </h3>
      </div>
    </div>
  );
};

export default Second;
