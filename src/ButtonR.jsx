import React from "react";

const HeaderButtonR = ({ children, ...props }) => (
  <button style={{ marginRight: "10px" }} {...props}>
    {children}
  </button>
);

export default HeaderButtonR;