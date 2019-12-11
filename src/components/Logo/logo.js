import React from "react";
import LOGO from "../../img/LOGO.svg";
import "./logo.css";

function Logo() {
  return (
    <div>
      <img src={LOGO} className="Logo-img" alt="logo" />
    </div>
  );
}

export default Logo;
