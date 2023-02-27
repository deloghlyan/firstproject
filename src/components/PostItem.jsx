import { Delete, Edit } from "@mui/icons-material";
import { Box, IconButton, TableCell, TableRow, Input } from "@mui/material";
import React, { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DoneIcon from "@mui/icons-material/Done";
import CancelIcon from "@mui/icons-material/Cancel";

export default function PostItem({ posts, post, index, setPosts }) {
  const [editable, setEditable] = useState(false);
  const [editTitle, setEditTitle] = useState("");
  const [editBody, setEditBody] = useState("");
  // const [changable, setChangable] = useState(false);

  const removeItem = (id) => {
    setPosts(posts.filter((item) => item.id !== id));
  };

  const editItem = () => {
    setEditable(true);
    setEditTitle(post.title);
    setEditBody(post.body);
  };

  const done = () => {
    const edited = {
      id: post.id,
      title: editTitle,
      body: editBody,
    };
    setPosts(posts.map((item) => (item.id === post.id ? edited : item)));
    setEditable(false);
  };

  const cancel = () => {
    setEditable(false);
  };

  // useEffect(() => {
  //   return () => {
  //     console.log('Deleted');
  //   }
  // }, []);

  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      {/* {editable ? Input : } */}
      <TableCell component="th" align="center">
        {index + 1}
      </TableCell>
      <TableCell component="th" align="center">
        {editable ? (
          <Input
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            fullWidth
          />
        ) : (
          <>{post.title}</>
        )}
      </TableCell>
      <TableCell align="center">
        {editable ? (
          <Input
            value={editBody}
            onChange={(e) => setEditBody(e.target.value)}
            fullWidth
          />
        ) : (
          <>{post.body}</>
        )}
      </TableCell>
      <TableCell align="center">
        <Box display="flex" justifyContent="space-between">
          {editable ? (
            <>
              <IconButton onClick={() => done()}>
                <DoneIcon />
              </IconButton>
              <IconButton onClick={() => cancel()}>
                <CancelIcon />
              </IconButton>
            </>
          ) : (
            <>
              <IconButton onClick={() => editItem()}>
                <Edit />
              </IconButton>
              <IconButton onClick={() => removeItem(post.id)}>
                <Delete />
              </IconButton>
            </>
          )}
        </Box>
      </TableCell>
    </TableRow>
  );
}
