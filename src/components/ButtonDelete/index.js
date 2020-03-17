import React from "react";
import "./slyle.css";

function ButtonDelete({ delMessageAction, title }) {
  return (
    <div>
      <button
        type="submit"
        className="delete-box"
        onClick={() => delMessageAction(title)}
      >
        <p>Удалить</p>
      </button>
    </div>
  );
}

export default ButtonDelete;
