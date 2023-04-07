import Banner from "../../../img/banner.png";
import Bannermovil from "../../../img/bannermovil.png";

import React from "react";

export const BannerPortada = () => {
  var sectionStyle = {
    width: "100%",
    height: "400px",
    backgroundImage: "url(" + { Banner } + ")",
  };

  return (
    <>
      <div
        className="row d-block w-100 d-none d-md-block"
        style={{ sectionStyle }}
      >
        {/* <img src={Banner} className=" d-block w-100 ." alt="" /> */}
      </div>
      <div className="row d-md-none d-block w-100">
        {/* <img src={Bannermovil} className=" d-block w-100 ." alt="" /> */}
      </div>
    </>
  );
};
