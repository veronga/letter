import React from "react";
import "./style.css";

function SendMessage({ date, title, status }) {
  return (
    <div className="cont-send">
      <div className="cont-date">
        <p className="color">{date}</p>
      </div>
      <div className="cont-theme">
        <p className="color">{title}</p>
      </div>
      <div className="cont-status">
        {status}
        {/* <p className="mess-shipped">Отправлено</p>
        <p className="mess-queue">В очереди</p>
        <p className="mess-error">Ошибка</p> */}
      </div>
    </div>
  );
}

export default SendMessage;
