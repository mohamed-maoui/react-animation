import React from "react";

import TextAnimation from "./animations/TextAnimation";
import Sun from "../../public/assets/img/sun.png";
import Mercury from "../../public/assets/img/mercury.png";
import Venus from "../../public/assets/img/venus.png";
import Earth from "../../public/assets/img/earth.png";
import Mars from "../../public/assets/img/mars.png";
import Ceres from "../../public/assets/img/ceres.png";
import Jupiter from "../../public/assets/img/jupiter.png";
import Saturn from "../../public/assets/img/saturn.png";
import Uranus from "../../public/assets/img/uranus.png";

function Banner() {
  return (
    <div className="banner">
      <div className="aestroid">
        <div className="stone"></div>
        <div className="stone"></div>
        <div className="stone"></div>
        <div className="stone"></div>
        <div className="stone"></div>
        <div className="stone"></div>
        <div className="stone"></div>
      </div>
      <div className="banner-text">
        <h1>
          all <TextAnimation /> information
        </h1>
        <h2>
          " Sometimes you have to go up really high to understand how small you
          really are. "
        </h2>
        <h6>― Felix Baumgartner ―</h6>
      </div>
      <div className="sun">
        <div className="sun-img">
          <img src={Sun} alt="" />
        </div>
        <div className="circle">
          <div className="icon">
            <img src={Mercury} alt="" />
          </div>
          <div className="icon">
            <img src={Venus} alt="" />
          </div>
          <div className="icon">
            <img src={Earth} alt="" />
          </div>
          <div className="icon">
            <img src={Mars} alt="" />
          </div>
          <div className="icon">
            <img src={Ceres} alt="" />
          </div>
          <div className="icon">
            <img src={Jupiter} alt="" />
          </div>
          <div className="icon">
            <img src={Saturn} alt="" />
          </div>
          <div className="icon">
            <img src={Uranus} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
