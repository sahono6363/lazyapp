import React from "react";

const From = ({ from,setFrom}) => {
  return (
    <input
      type="text"
      value={from}
      onChange={(e) => setFrom(e.target.value)}
      placeholder="誰から？"
    />
  );
};

export default From;
