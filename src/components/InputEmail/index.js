import React from "react";
import "./style.css";

function InputEmail() {
  return (
    <div className="input-cont">
      <input
        type="text"
        name="name"
        className="input-cont-left"
        placeholder="Имя"
      />
      <input
        type="text"
        name="email"
        className="input-cont-right"
        placeholder=" Email"
        autocomplete="off"
      />
    </div>
  );
}

export default InputEmail;
