import React from "react";

const Title = ({ title,setTitle}) => {
  return <input type="text"
    value={title}
    onChange={e => setTitle(e.target.value)}
  placeholder="おすすめされたやつ"/>;
};

export default Title;