import React from "react";
import "./Button.css";

const Button = ({ content, type, onButtonClick }) => {
  // change the class name of the button if the content = 0
  return (
    <div
      className={`Button ${content === "0" ? "zero" : ""} ${type || ""} `}
      onClick={onButtonClick(content)}
    >
      {content}
    </div>
  );
};
export default Button;
