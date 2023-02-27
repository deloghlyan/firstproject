import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import PostItem from "./PostItem";

export default function PostsList({ posts, setPosts }) {
  return (
    <TableContainer component={Paper} sx={{ maxWidth: "80%", margin: "auto" }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">N</TableCell>
            <TableCell align="center">Posts Title</TableCell>
            <TableCell align="center">Posts Body</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {posts.map((post, index) => (
            <PostItem key={post.id} post={post} index={index} setPosts={setPosts} posts={posts} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
