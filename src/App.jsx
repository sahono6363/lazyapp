import React, { useState } from "react";
import Header from "./Header";
import GoButton from "./Gobutton";
import Input from "./Input/Input";
import { Category } from "@mui/icons-material";

function App() {
  const [input, setInput] = useState({ category: 0, title: "", from: "" });
  const [list, setlist] = useState([]);

  const handleGo = () => {
    if (input.title === "" || input.from === "") return;
    setlist([...list, { ...input }]);
    setInput({ category: 0, title: "", from: "" });
  };

  return (
    <div>
      <Header />
      <Input input={input} setInput={setInput} list={list} />
      <GoButton onClick={handleGo} />
    </div>
  );
}

export default App;
