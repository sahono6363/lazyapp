import React from "react";


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
        <button style={{ marginRight: "10px" }}>random</button>
        <button style={{ marginRight: "10px" }}>select</button>
      </div>
    </header>
  );
};

export default Header;
