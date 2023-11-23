import React from "react";
import "./Test.css";
import { certificate, girlwithtrophy, trophy } from "../../assets";

const Test = () => {
  return (
    <div className="test">
      <div>
        <div>
          <h1>Get up to 100% scholarship</h1>
          <h1>
            with the{" "}
            <span style={{ color: "#FF693D" }}>Vedantu Scholarship</span>
          </h1>
          <h1 style={{ color: "#FF693D" }}>Admission Test</h1>
          <div className="outsidediv">
            <div className="insidediv">
              <div>
                <img src={trophy} alt="trophy"/>
              </div>
              <div>
                <p>Take the Online test & win from</p>
                <p>a pool of 100+ Crore</p>
              </div>
            </div>
            <div className="insidediv">
              <div>
                <img src={certificate} alt="certificate"/>
              </div>
              <div>
                <p>Assured scholarship for</p>
                <p>every attendee</p>
              </div>
            </div>
          </div>
          <button>Register For FREE</button>
          <p>Hurry, limited seats are left</p>
        </div>
        <div>
          <img src={girlwithtrophy} alt="girl with trophy" />
        </div>
      </div>
    </div>
  );
};

export default Test;
