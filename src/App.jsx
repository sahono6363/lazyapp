import React, { useState, useEffect } from "react";
import Header from "./Header";
import GoButton from "./Input/GoButton";
import Input from "./Input/Input";
import "./App.css";
import "./complete.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { Categories } from "./Input/Category";
import { loadList, saveList } from "./Backends/storage";
import {
  loadCompletedList,
  saveCompletedList,
} from "./Backends/completestrage";
import { removeItemFromList } from "./delete";

function App() {
  const [input, setInput] = useState({ category: 0, title: "", from: "" });
  const [list, setlist] = useState(loadList());
  const [originalList, setOriginalList] = useState(loadList());
  const [isSorted, setIsSorted] = useState(false);
  const [completedList, setCompletedList] = useState(loadCompletedList());
  const [isAlignMode, setIsAlignMode] = useState(true); 
  const sortedCompletedList = isAlignMode
    ? [...completedList].sort((a, b) => (a.completedAt ?? 0) - (b.completedAt ?? 0))
    : [...completedList].sort((a, b) => a.category - b.category);;
  const [impressions, setImpressions] = useState(() => {
    const saved = localStorage.getItem("lazyapp-impressions");
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    saveList(list);
  }, [list]);

  useEffect(() => {
    if (!isSorted) {
      setOriginalList(list);
    }
  }, [list, isSorted]);

  const handleSortByCategory = () => {
    if (!isSorted) {
      const sortedList = [...list].sort((a, b) => a.category - b.category);
      setlist(sortedList);
      setIsSorted(true);
    } else {
      setlist(originalList);
      setIsSorted(false);
    }
  };

  const handleToggleSort = () => {
    if (isAlignMode) {
      const sortedList = [...list].sort((a, b) => a.category - b.category);
      setlist(sortedList);
      setIsSorted(true);
    } else {
      const sortedList = [...list].sort(
        (a, b) => (a.addedAt ?? 0) - (b.addedAt ?? 0)
      );
      setlist(sortedList);
      setIsSorted(true);
    }
    setIsAlignMode(!isAlignMode); 
  };

  useEffect(() => {
    saveCompletedList(completedList);
  }, [completedList]);

  useEffect(() => {
    localStorage.setItem("lazyapp-impressions", JSON.stringify(impressions));
  }, [impressions]);

  const handleGo = () => {
    if (input.title === "" || input.from === "") return;
    const newItem = {
      ...input,
      checked: false,
      addedAt: Date.now(),
    };
    setlist([...list, newItem]);
    setInput({ category: 0, title: "", from: "" });

    if (isSorted) {
      setOriginalList([...originalList, { ...input, checked: false }]);
    }
    saveList([...list, newItem]);
  };

  const handleDelete = (index) => {
    setlist(list.filter((_, i) => i !== index));
    setImpressions((prev) => {
      const newObj = { ...prev };
      delete newObj[index];
      return newObj;
    });

    if (isSorted) {
      const deletedItem = list[index];
      setOriginalList(
        originalList.filter(
          (item) =>
            !(
              item.title === deletedItem.title &&
              item.from === deletedItem.from &&
              item.category === deletedItem.category
            )
        )
      );
    }
  };

  const handleComplete = (index) => {
    const item = list[index];
    const impression = impressions[index] || "";
    setCompletedList([...completedList, { ...item, impression, completedAt: Date.now()  }]);
    setlist(list.filter((_, i) => i !== index));
    setImpressions((prev) => {
      const newObj = { ...prev };
      delete newObj[index];
      return newObj;
    });

    setOriginalList(
      originalList.filter(
        (oriItem) =>
          !(
            oriItem.title === item.title &&
            oriItem.from === item.from &&
            oriItem.category === item.category
          )
      )
    );
  };

  return (
    <div>
      <Header
        list={list}
        onToggleSort={handleToggleSort}
        isAlignMode={isAlignMode}
      />

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
                    {item.category === 0 ? (
                      <a
                        href={`https://www.youtube.com/results?search_query=${encodeURIComponent(
                          item.title
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        {Categories[item.category].icon}
                      </a>
                    ) : (
                      Categories[item.category].icon
                    )}
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
                        value={impressions[i] || ""}
                        onChange={(e) =>
                          setImpressions({
                            ...impressions,
                            [i]: e.target.value,
                          })
                        }
                      />
                      <button
                        type="submit"
                        className="buttonS"
                        onClick={() => handleComplete(i)}
                      >
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
            {sortedCompletedList.map((item, i) => (
              <React.Fragment key={i}>
                <div style={{ display: "flex" }}>
                  <div className="category3">
                    {Categories[item.category].icon}
                  </div>
                  <div className="title3">{item.title}</div>

                  <button
                    className="button4"
                    onClick={() => {
                      const newCompleted = completedList.filter(
                        (_, idx) => idx !== i
                      );
                      setCompletedList(newCompleted);
                    }}
                  >
                    <DeleteIcon />
                  </button>
                </div>
                <div className="from3">From.{item.from}</div>
                {item.impression && (
                  <div className="impression2">{item.impression}</div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
