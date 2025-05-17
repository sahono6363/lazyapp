import React, { useState } from "react";
import Header from "./Header";
import GoButton from "./Gobutton";
import Category from "./Input/Category";
import Title from "./Input/Title";

function App() {
  return (
    <div>
      <Header />
      <Category />
      <Title/>
      <GoButton />
    </div>
  );
}

export default App;
