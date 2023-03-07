import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export default function Loading() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      height="100%"
      width="100%"
      alignItems="center"
    >
      <CircularProgress />
    </Box>
  );
}
