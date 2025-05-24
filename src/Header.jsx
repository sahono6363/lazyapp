import React from "react";
import HeaderButtonR from "./ButtonR";
import HeaderButtonA from "./ButtonA";

const Header = ({ onToggleSort, isAlignMode }) => {
  return (
    <header
      className="hachi-maru-pop-regular"
      style={{
        backgroundColor: "#a2997f",
        color: "rgb(255, 255, 255)",
        height: "60px",
        paddingBottom: "5px",
        textAlign: "center",
        fontSize: "25px",
        fontWeight: "bold",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: "10px",
      }}
    >
      <span style={{ marginLeft: "10px" }}>Someday List</span>
      <div>
        <HeaderButtonR>random</HeaderButtonR>
        <HeaderButtonA onClick={onToggleSort}>
          {isAlignMode ? "align" : "normal"}
        </HeaderButtonA>
      </div>
    </header>
  );
};

export default Header;
