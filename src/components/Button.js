import React from "react";
import classNames from "classnames";
import "components/Button.scss";

export default function Button(props) {
  //destructuring from stories index.js
  const { confirm, danger, onClick, disabled } = props;

  const buttonClass = classNames("button", {
    "button--confirm": confirm,
    "button--danger": danger,
  });

  return (
    <button onClick={onClick} className={buttonClass} disabled={disabled}>
      {props.children}
    </button>
  );
}
