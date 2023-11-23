import React from "react";
import "./Parents.css";
import { parentssvg1, parentssvg2, parentssvg3, parentssvg4, smilinguncle } from "../../assets";

const Parents = () => {
  return (
    <div className="parents">
      <div>
        <div>
          <h1 style={{ marginTop: "20px" }}>
            <span style={{ color: "#FF693D" }}>Parents,</span> we know exactly
          </h1>
          <h1>what you need</h1>
          <div className="parent-grid-container ">
            <div className="parent-grid-item">
              <img src={parentssvg1} alt="parentpic1"/>
              <p>Monthly parent teacher meetings</p>
            </div>
            <div className="parent-grid-item">
              <img src={parentssvg2} alt="parentpic1"/>
              <p>Positive learning environment</p>
            </div>
            <div className="parent-grid-item">
              <img src={parentssvg3} alt="parentpic1"/>
              <p>Flexible payment options</p>
            </div>
            <div className="parent-grid-item">
              <img src={parentssvg4} alt="parentpic1"/>
              <p>Performance reports</p>
            </div>
          </div>
        </div>
        <div>
          <img src={smilinguncle} alt="smiling uncle"/>
        </div>
      </div>
    </div>
  );
};

export default Parents;
