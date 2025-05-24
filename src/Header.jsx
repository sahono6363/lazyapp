import React from "react";
import HeaderButtonR from "./ButtonR";
import HeaderButtonS from "./ButtonS";
import HeaderButtonA from "./ButtonA";

const Header = ({ onSortByCategory }) => {
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
        <HeaderButtonS >select</HeaderButtonS>
        <HeaderButtonA onClick={onSortByCategory}>align</HeaderButtonA>
      </div>
    </header>
  );
};

export default Header;
