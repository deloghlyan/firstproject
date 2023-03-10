import React from "react";

export default function Error({ message }) {
  return (
    <Typography variant="h2" color={"red"}>
      ERROR -- {message}!!
    </Typography>
  );
}