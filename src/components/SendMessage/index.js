import React from "react";
import "./style.css";
import ButtonDelete from "../ButtonDelete";

function SendMessage({ date, title, status, delMessageAction }) {
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
        <p className="mess-shipped">Отправлено</p>
      </div>
      <ButtonDelete delMessageAction={delMessageAction} title={title} />
    </div>
  );
}

export default SendMessage;
