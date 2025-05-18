import React from "react";
import HeaderButtonR from "./ButtonR";
import HeaderButtonS from "./ButtonS";

const Header = () => {
  return (
    <header
      className="hachi-maru-pop-regular"
      style={{
        backgroundColor: "lightgreen",
        color: "black",
        padding: "5px",
        textAlign: "center",
        fontSize: "25px",
        fontWeight: "bold",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <span style={{ marginLeft: "10px" }}>Someday List</span>
      <div>
        <HeaderButtonR>random</HeaderButtonR>
        <HeaderButtonS>select</HeaderButtonS>
      </div>
    </header>
  );
};

export default Header;
