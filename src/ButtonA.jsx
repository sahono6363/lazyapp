import React from "react";

const HeaderButtonA = ({ children, ...props }) => (
  <button style={{ marginRight: "10px" }} {...props}>
    {children}
  </button>
);

export default HeaderButtonA;