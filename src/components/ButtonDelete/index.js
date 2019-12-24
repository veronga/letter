import React from "react";
import "./slyle.css";

function ButtonDelete({ delMessageAction }) {
  console.log(delMessageAction);
  return (
    <div>
      <button type="submit" className="delete-box" onClick={delMessageAction}>
        <p>Удалить</p>
      </button>
    </div>
  );
}

export default ButtonDelete;
