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
        height: "4.17vw",
        paddingBottom: "0.35vw", 
        textAlign: "center",
        fontSize: "1.74vw", 
        fontWeight: "bold",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: "0.69vw",
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
