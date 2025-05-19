import React from "react";
import "./texts.css";

const Title = ({ title,setTitle}) => {
  return <input type="text" className="title"
    value={title}
    onChange={e => setTitle(e.target.value)}
  placeholder="おすすめされたやつ"/>;
};

export default Title;