import React from "react";
import ButtonR from "./ButtonR";
import HeaderButtonS from "./ButtonS";

const Header = ({ list}) => {
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
        <ButtonR list={list} />
        <HeaderButtonS>select</HeaderButtonS>
      </div>
    </header>
  );
};

export default Header;
