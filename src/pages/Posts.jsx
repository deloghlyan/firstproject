import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, CircularProgress } from "@mui/material";
import PostsList from "../components/PostsList";

export default function Posts() {
  const [posts, setPosts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      getData();
    }, 3000);
  }, []);

  const getData = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    setPosts(data);
    setIsLoading(false);
  };

  return (
    <Box width="100%" height="100%">
      {isLoading ? (
        <Box
          display="flex"
          justifyContent="center"
          height="100%"
          width="100%"
          alignItems="center"
        >
          <CircularProgress />
        </Box>
      ) : (
        posts && <PostsList posts={posts} />
      )}
    </Box>
  );
}
