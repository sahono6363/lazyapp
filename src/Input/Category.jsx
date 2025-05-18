import React, { useState } from "react";
import Box from "@mui/material/Box";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import MovieIcon from "@mui/icons-material/Movie";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import "./Category.css";

export const Categories = [
  { icon: <MusicNoteIcon /> },
  { icon: <MovieIcon /> },
  { icon: <SportsEsportsIcon /> },
  { icon: <MenuBookIcon /> },
];

const Category = ({selected, setSelected, categories}) => (
    <Box className="box">
      <Select className="select"
        value={selected}
        onChange={(e) => setSelected(Number(e.target.value))}
        renderValue={(selectedIdx) => (
          <span className="categories">
            {Categories[selectedIdx].icon}
          </span>
        )}
      >
        {Categories.map((category, idx) => (
          <MenuItem className="menuitem"
            value={idx} key={category.label}>
            {category.icon}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );

export default Category;
