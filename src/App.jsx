import React, { useState, useEffect } from "react";
import Header from "./Header";
import GoButton from "./Input/GoButton";
import Input from "./Input/Input";
import "./App.css";
import "./complete.css";
import DeleteIcon from "@mui/icons-material/Delete";
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
    setlist([...list, { ...input, checked: false }]);
    setInput({ category: 0, title: "", from: "" });
  };

  const handleDelete = (index) => {
    setlist(removeItemFromList(list, index));
  };

  return (
    <div>
      <Header list={list} />
      <div className="app">
        <div className="list" style={{ display: "flex" }}>
          <div style={{ flex: 1 }}>
            <h1>―やるかもしれないやつ―</h1>
            <Input
              input={input}
              setInput={setInput}
              Categories={Categories}
              onGoClick={handleGo}
            />
            {list.map((item, i) => (
              <React.Fragment key={i}>
                <div style={{ display: "flex" }}>
                  <div className="category2">
                    {Categories[item.category].icon}
                  </div>
                  <div className="title2">{item.title}</div>
                  <div className="from2">{item.from}</div>
                  <input
                    className="checkbox"
                    type="checkbox"
                    checked={item.checked}
                    onChange={() => {
                      const newList = [...list];
                      newList[i].checked = !newList[i].checked;
                      setlist(newList);
                    }}
                  />
                  <button className="button2" onClick={() => handleDelete(i)}>
                    <DeleteIcon />
                  </button>
                </div>
                <div>
                  {item.checked && (
                    <div style={{ display: "flex" }}>
                      <textarea
                        className="impression"
                        placeholder="感想を入力"
                      />
                      <button type="submit" className="button3">
                        →
                      </button>
                    </div>
                  )}
                </div>
              </React.Fragment>
            ))}
          </div>
          <div className="complete" style={{ flex: 1 }}>
            <h1>―おわったやつ―</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
