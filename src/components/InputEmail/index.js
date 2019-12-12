import React from "react";
import "./style.css";

function InputEmail() {
  return (
    <div className="input-cont">
      <input type="text" name="name" className="input-cont-left" />
      <input type="text" name="email" className="input-cont-right" />
    </div>
  );
}

export default InputEmail;
