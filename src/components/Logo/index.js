import React from "react";
import LOGO from "../../img/logo.png";
import "./style.css";

function Logo() {
  return (
    <div>
      <img src={LOGO} className="logo-img" alt="logo" />
    </div>
  );
}

export default Logo;
