import React, { useState } from "react";
import { Categories } from "./Input/Category";

export default function SelectButton({ selected, setSelected }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <button onClick={() => setOpen(!open)}>セレクト</button>
      {open && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            background: "#fff",
            border: "1px solid #ccc",
            zIndex: 10,
            minWidth: "120px",
          }}
        >
          <div
            style={{
              padding: "8px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              fontWeight: selected === null ? "bold" : "normal",
            }}
            onClick={() => {
              setSelected(null);
              setOpen(false);
            }}
          >
            <span style={{ marginLeft: 8 }}>ぜんぶ</span>
          </div>
          {Categories.map((cat, idx) => (
            <div
              key={idx}
              style={{
                padding: "8px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
              }}
              onClick={() => {
                setSelected(idx);
                setOpen(false);
              }}
            >
              {cat.icon}
              <span style={{ marginLeft: 8 }}>{cat.label}</span>
            </div>
          ))}
        </div>
      )}
      <div style={{ marginTop: 16, fontSize: 32 }}>
        {selected !== null && Categories[selected].icon}
      </div>
    </div>
  );
}