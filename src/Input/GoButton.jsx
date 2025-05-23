import React from "react";
import "./texts.css";

const GoButton = ({ onClick }) => {
  return <button className="button" onClick={onClick}>↓</button>;
};

export default GoButton;
