import React from "react";
import "./Whychoose.css";
import { downloadIcon, wcvpic5, wcvpic6, whychoosepic } from "../../assets";
import Grid from "../Grid/Grid";

const Whychoose = () => {
  return (
    <div className="whychoose">
      <div>
        <div>
          <h1>
            <span style={{ color: "#FF693D" }}>Why choose</span> Vedantu
            Learning Centre?
          </h1>
        </div>
        <div>
          <div>
            <img src={whychoosepic} alt="brochure pic" className="brochure" />
          </div>
          <div>
            <h2>Learn from India’s Top</h2>
            <h2>Teachers</h2>
            <p>With 16+ years experience of producing top JEE/NEET rankers</p>
            <button>
              <img src={downloadIcon} alt="download icon" />
              <p>Download brochure</p>
            </button>
          </div>
        </div>
        <Grid />
        <hr />
        <div className="afterdotted">
          <h1>
            Experience <span style={{ color: "#FF693D" }}>100% Offline</span>{" "}
            learning in hi-tech interactive
          </h1>
          <h1>classrooms</h1>
        </div>
        <div className="grid-container">
          <div className="grid-item">
            <img src={wcvpic5} alt="why choose 1" />
            <div>
              <div className="headingthree">
                <h3>Unlimited Doubt Solving</h3>
              </div>
              <div>
                <p>In-class, at dedicated doubt rooms & on the</p>
                <p>Vedantu app</p>
              </div>
            </div>
          </div>
          <div className="grid-item">
            <img src={wcvpic6} alt="why choose 1" />
            <div>
              <div className="headingthree">
                <h3>Unlimited Doubt Solving</h3>
              </div>
              <div>
                <p>In-class, at dedicated doubt rooms & on the</p>
                <p>Vedantu app</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whychoose;
