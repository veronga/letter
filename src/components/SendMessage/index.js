import React from "react";
import "./style.css";

function SendMessage() {
  return (
    <div className="cont-send">
      <div className="cont-date">
        <p className="color">23 октября</p>
      </div>
      <div className="cont-theme">
        <p className="color">
          Тема письма, которая не поместится в эту строку, потому ч...{" "}
        </p>
      </div>
      <div className="cont-status">
        <p className="mess-shipped">Отправлено</p>
        <p className="mess-queue">В очереди</p>
        <p className="mess-error">Ошибка</p>
      </div>
    </div>
  );
}

export default SendMessage;
