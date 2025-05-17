import React from "react";

const Categories = ["A", "B", "C"];

const Category = () => {
  return (
    <>
      <select>
        {Categories.map((category) => {
          return <option key={category}>{category}</option>;
        })}
      </select>
    </>
  );
};

export default Category;
