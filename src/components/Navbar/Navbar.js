import React from "react";
import { blackArrow, vedantuLogo, phoneIcon,orangeDownarrow } from "../../assets";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div>
        <img src={vedantuLogo} alt="logo" width={'100px'} height={'20px'}/>
        <button className="btn">
          <h6>Courses</h6>
          <img src={orangeDownarrow} alt="blackarrow" width={'10px'} height={'6px'}/>
        </button>
        <div style={{ display: "flex", gap: "3px" }}>
          <h6 className="text">Courses for kids</h6>
          <img src={blackArrow} alt="blackarrow" />
        </div>
        <div style={{ display: "flex", gap: "3px" }}>
          <h6 className="text">Free study material</h6>
          <img src={blackArrow} alt="blackarrow" />
        </div>
        <div style={{ display: "flex" }}>
          <h6 className="text">Offline Centres</h6>
        </div>
        <div style={{ display: "flex", gap: "3px" }}>
          <h6 className="text">More</h6>
          <img src={blackArrow} alt="blackarrow" />
        </div>
        <a href="www.google.com" style={{marginLeft: "100px"}}>
          <img src={phoneIcon} alt="phone icon" width={'12px'} height={'12px'}/>
        </a>
        <div className="textCont">
            <p className="text1">Talk to our experts</p>
            <p className="text2">1800-120-456-456</p>
        </div>
        <button className="btn1">Sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;
