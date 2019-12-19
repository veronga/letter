import React from "react";
import "./style.css";

function Button(props) {
  const { onClick } = props;
  return (
    <div>
      <button type="submit" className="button-box" onClick={onClick}>
        <p className="send-button">Oтправить</p>
      </button>
    </div>
  );
}

export default Button;
