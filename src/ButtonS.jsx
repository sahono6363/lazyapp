import React from "react";

const HeaderButtonS = ({ children, ...props }) => (
  <button style={{ marginRight: "10px" }} {...props}>
    {children}
  </button>
);

export default HeaderButtonS;