import React from "react";
import "./style.css";

function ContainerShipped() {
  return (
    <div className="cont-mess">
      <div className="cont-date">
        <p className="cont-mess">Дата</p>
      </div>
      <div className="cont-theme">
        <p className="cont-mess">Тема</p>
      </div>
      <div className="cont-status">
        <p className="cont-mess">Статус</p>
      </div>
    </div>
  );
}

export default ContainerShipped;
