import { Delete, Edit } from "@mui/icons-material";
import { Box, IconButton, TableCell, TableRow } from "@mui/material";
import React from "react";
import axios from "axios";

export default function PostItem({ post, index }) {

  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell component="th" align="center">
        {index + 1}
      </TableCell>
      <TableCell component="th" align="center">
        {post.title}
      </TableCell>
      <TableCell align="center">{post.body}</TableCell>
      <TableCell align="center">
        <Box display="flex" justifyContent="space-between">
          <IconButton>
            <Edit />
          </IconButton>
          <IconButton>
            <Delete />
          </IconButton>
        </Box>
      </TableCell>
    </TableRow>
  );
}
