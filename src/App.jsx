import React, { useState } from "react";
import Header from "./Header";
import GoButton from "./GoButton";
import Input from "./Input/Input";
import { Categories } from "./Input/Category";

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
      <div>
        {list.map((item, i) => (
          <div key={i} >
            {Categories[item.category].icon}
            {item.title}
            {item.from}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
