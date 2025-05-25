import React from "react";

const HeaderButtonA = ({ children, ...props }) => (
  <button className="buttonA" style={{ marginRight: "10px" }} {...props}>
    {children}
  </button>
);

export default HeaderButtonA;