import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export default function Filtered({ filter, setFilter }) {
  return (
    <>
      <Box
        className="filter-components"
        sx={{ maxWidth: "80%", margin: "auto" }}
      >
        <FormControl sx={{ width: 200, m: 2 }}>
          <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={filter.sort}
            label="Sort By"
            onChange={(e) => setFilter({ ...filter, sort: e.target.value })}
          >
            <MenuItem value={"title"}>Title</MenuItem>
            <MenuItem value={"body"}>Body</MenuItem>
          </Select>
        </FormControl>
        <TextField
          id="outlined-basic"
          label="Search..."
          variant="outlined"
          value={filter.search}
          onChange={(e) => setFilter({ ...filter, search: e.target.value })}
          sx={{ width: 200, m: 2 }}
        />
      </Box>
    </>
  );
}
