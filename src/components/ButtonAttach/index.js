import React from "react";
import "./style.css";
import clip from "../../img/clip.png";

function ButtonAttach() {
  return (
    <div className="cont-box">
      <img src={clip} alt="clip" />
      <input type="file" className="add-file"></input>
    </div>
  );
}

export default ButtonAttach;
