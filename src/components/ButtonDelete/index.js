import React from "react";
import "./slyle.css";

function ButtonDelete({ delMessageAction }) {
  return (
    <div>
      <button type="submit" className="delete-box" onClick={delMessageAction}>
        <p>Удалить</p>
      </button>
    </div>
  );
}

export default ButtonDelete;
