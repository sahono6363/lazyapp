import React from "react";
import "./texts.css";

const GoButton = ({ onClick, type = "button" }) => {
  return (
    <button className="button" onClick={onClick}>
      ↓
    </button>
  );
};

export default GoButton;
