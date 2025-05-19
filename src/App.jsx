import React, { useState,useEffect } from "react";
import Header from "./Header";
import GoButton from "./Input/GoButton";
import Input from "./Input/Input";
import { Categories } from "./Input/Category";
import { loadList, saveList } from "./storage";
import { removeItemFromList } from "./delete";

function App() {
  const [input, setInput] = useState({ category: 0, title: "", from: "" });
  const [list, setlist] = useState(loadList());

  useEffect(() => {
    saveList(list);
  }, [list]);

  const handleGo = () => {
    if (input.title === "" || input.from === "") return;
    setlist([...list, { ...input }]);
    setInput({ category: 0, title: "", from: "" });
  };

  const handleDelete = (index) => {
    setlist(removeItemFromList(list, index));
  };

  return (
    <div>
      <Header />
      <Input
        input={input}
        setInput={setInput}
        Categories={Categories}
        onGoClick={handleGo}
      />

      <div>
        {list.map((item, i) => (
          <div key={i}>
            {Categories[item.category].icon}
            {item.title}
            {item.from}
            <button onClick={() => handleDelete(i)}>削除</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
