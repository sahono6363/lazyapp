import React from "react";

const Title = () => {
  return <input type="text"
    onChange={e => setTitle(e.target.value)}
  placeholder="おすすめされたやつ"/>;
};

export default Title;