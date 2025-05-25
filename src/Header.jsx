import React from "react";
import ButtonR from "./ButtonR";


const Header = ({ list, onToggleSort, isAlignMode }) => {
  return (
    <header
      className="hachi-maru-pop-regular"
      style={{
        backgroundColor: "#a2997f",
        color: "rgb(255, 255, 255)",
        height: "4.5vw",
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
      <span style={{ marginLeft: "10px" }}>Someday List ～きっといつかやる～</span>
      <div style={{display:"flex"}}>
        <ButtonR list={list} />
        

      </div>
    </header>
  );
};

export default Header;
