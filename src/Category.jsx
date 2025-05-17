import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";

// FontAwesomeのCDNをindex.htmlで読み込んでいる場合は<i>タグ＋classNameでOK
const Categories = [
  { icon: "fa-solid fa-music" },
  { icon: "fa-solid fa-film" },
  { icon: "fa-solid fa-gamepad" },
  { icon: "fa-solid fa-book-open" },
];

const Category = () => {
  const [selected, setSelected] = useState(0);

  return (
    <Box>
      <Select
        value={selected}
        onChange={(e) => setSelected(Number(e.target.value))}
        fullWidth
      >
        {Categories.map((category, idx) => (
          <MenuItem value={idx} key={category.label}>
            <i className={category.icon}></i>
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
};

export default Category;
