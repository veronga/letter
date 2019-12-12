import React from "react";
import "./style.css";
import clip from "../../img/clip.png";

function ButtonAttach() {
  return (
    <button className="cont-box">
      <img src={clip} className="" alt="clip" />
      <input type="file"></input>
    </button>
  );
}

export default ButtonAttach;
