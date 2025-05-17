import React, { useState } from "react";
import Box from "@mui/material/Box";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import MovieIcon from "@mui/icons-material/Movie";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import MenuBookIcon from "@mui/icons-material/MenuBook";

export const Categories = [
  { icon: <MusicNoteIcon /> },
  { icon: <MovieIcon /> },
  { icon: <SportsEsportsIcon /> },
  { icon: <MenuBookIcon /> },
];

const Category = ({selected, setSelected, categories}) => (
    <Box>
      <Select
        value={selected}
        onChange={(e) => setSelected(Number(e.target.value))}
        renderValue={(selectedIdx) => (
          <span>
            <span>{Categories[selectedIdx].icon}</span>
          </span>
        )}
      >
        {Categories.map((category, idx) => (
          <MenuItem value={idx} key={category.label}>
            {category.icon}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );

export default Category;
