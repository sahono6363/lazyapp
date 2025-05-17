import React, { useState } from "react";
import Header from "./Header";
import Category from "./Category";
import Title from "./Title";
import GoButton from "./Gobutton";

const Categories = [
  { icon: "fa-solid fa-music" },
  { icon: "fa-solid fa-film" },
  { icon: "fa-solid fa-gamepad" },
  { icon: "fa-solid fa-book-open" },
];

function App() {
  const [selected, setSelected] = useState(0);
  const [title, setTitle] = useState("");
  const [list, setList] = useState([]);
  
  
  return (
    <div>
      <Header />
      <Category />
      <Title />
      <GoButton />
    </div>
  );
}

export default App;
