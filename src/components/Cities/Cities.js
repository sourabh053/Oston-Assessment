import React from "react";
import "./Cities.css";
import { orangesidearrow } from "../../assets";
import { allCities } from "../../assets";

const Cities = () => {
  return (
    <div className="cities">
      <div>
        <h2>
          Available in <span style={{ color: "#ff693d" }}>12 cities</span>
        </h2>
        <p>
          View More
          <img src={orangesidearrow} alt="orange arrow" />
        </p>
      </div>
      <div>
        <img src={allCities} alt="all cities" />
        <button>Request a Center</button>
      </div>
    </div>
  );
};

export default Cities;
