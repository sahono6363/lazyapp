import React from "react";
import Category from "./Category";
import { Categories } from "./Category";
import Title from "./Title";
import From from "./from";

function Input({ input, setInput, list, setList }) {
  return (
    <div>
      <Category
        selected={input.category}
        setSelected={(cat) => setInput({ ...input, category: cat })}
        categories={Categories}
      />
      <Title
        title={input.title}
        setTitle={(title) => setInput({ ...input, title })}
      />
      <From
        from={input.from}
        setFrom={(from) => setInput({ ...input, from })}
      />

      {/* ToDoリスト表示 */}
      <ul>
        {list.map((item, idx) => (
          <li key={idx}>
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => {
                const newList = [...list];
                newList[idx].checked = !newList[idx].checked;
                setList(newList);
              }}
            />
            {item.title}（{item.from}）
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Input;
