import React from "react";
import "./Grid.css";
import { wcvpic1, wcvpic2, wcvpic3, wcvpic4 } from "../../assets";

const Grid = () => {
  return (
    <>
      <div className="grid-container">
        <div className="grid-item">
          <img src={wcvpic1} alt="why choose 1" />
          <div>
            <div className="headingthree">
              <h3>Personal Attention & Progress</h3>
              <h3>Tracking</h3>
            </div>
            <div>
              <p>1-1 mentorship & monthly parent teacher</p>
              <p>meetings.</p>
            </div>
          </div>
        </div>
        <div className="grid-item">
          <img src={wcvpic2} alt="why choose 1" />
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
          <img src={wcvpic3} alt="why choose 1" />
          <div>
            <div className="headingthree">
              <h3>Unlimited Access to Vedantu</h3>
              <h3>Online</h3>
            </div>
            <div>
              <p>Learn, practice & test using 10,000+ curated</p>
              <p>study material</p>
            </div>
          </div>
        </div>
        <div className="grid-item">
          <img src={wcvpic4} alt="why choose 1" />
          <div>
            <div className="headingthree">
              <h3>Group Learning and Library</h3>
              <h3>Access</h3>
            </div>
            <div>
              <p>Learn in a healthy peer environment & get</p>
              <p>access to our library</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Grid;
