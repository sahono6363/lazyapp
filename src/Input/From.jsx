import React from "react";
import "./texts.css"

function From({ from, setFrom }) {
  return (
    <input className="from"
      type="text"
      value={from}
      onChange={(e) => setFrom(e.target.value)}
      placeholder="誰から？" />
  );
}

export default From;
