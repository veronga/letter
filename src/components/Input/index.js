import React from "react";
import classNames from "classnames";

import "./style.css";

export default function Input(props) {
  const { placeholder, inputStyle, value, onChange, name } = props;
  const inputClass = classNames(inputStyle, "input");

  return (
    <input
      type="text"
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={inputClass}
    />
  );
}
