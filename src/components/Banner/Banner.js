import React from "react";
import "./Banner.css";
import {
  bannerPic1,
  bannerPic2,
  bannerPic3,
  whatsapp,
  image,
} from "../../assets";

const Banner = () => {
  return (
    <div className="banner">
      <div className="bannerpart1">
        <div>
          <img src={bannerPic2} alt="bannerPic2" />
          <img src={bannerPic3} alt="bannerPic3" />
          <div className="btnCont">
            <button>
              <img src={whatsapp} alt="whatsappIcon" />
              <p>Connect with us</p>
            </button>
            <button>
              <p>Get a call back</p>
            </button>
          </div>
        </div>
        <div className="imageCont">
          <img src={bannerPic1} alt="bannerPic1" />
        </div>
      </div>
      <div className="bannerpart2">
        <div>
          <img src={image} alt="banner" />
        </div>
        <p>7631+ students & parents visited our centre last week!</p>
      </div>
    </div>
  );
};

export default Banner;
