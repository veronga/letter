import React from "react";
import LOGO from "../../img/LOGO.svg";
import "./index";

function Logo() {
  return (
    <div>
      <img src={LOGO} className="logo-img" alt="logo" />
    </div>
  );
}

export default Logo;
