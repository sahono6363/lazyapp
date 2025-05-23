import React, { useState } from "react";

function Checkbox({ label, checked, onChange }) {
  return (
    <label>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      {label}
    </label>
  );
}

export default function CheckboxExample() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div>
      <Checkbox
        label="チェックボックス"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
      <div>状態: {isChecked ? "ON" : "OFF"}</div>
    </div>
  );
}