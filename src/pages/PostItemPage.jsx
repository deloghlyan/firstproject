import { ArrowBack } from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useFetching } from "../hooks/useFetching";
import Loading from "../components/ui/Loading";
import { PostService } from "../api/PostService";

export function PostItemPage() {
  const params = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState({});
  const [isPostLoading, isPostsError, getData] = useFetching(async () => {
    const post = await PostService.getOne(params.id);
    setPost(post);
  });

  useEffect(() => {
    getData();
  }, []);

  return (
    <Box marginTop={3} marginLeft={3}>
      <IconButton
        sx={{ position: "fixed", left: 20, top: 70 }}
        onClick={() => navigate("/posts")}
      >
        <ArrowBack fontSize="large" />
      </IconButton>
      {isPostLoading ? (
        <Loading />
      ) : (
        (!isPostsError && (
          <>
            <Typography variant="h2" sx={{ color: "#f54e6d" }}>
              Post Item {post.id}
            </Typography>
            <Typography variant="h4" sx={{ color: "#635a5a" }}>
              {post.title}
            </Typography>
            <Typography variant="p" sx={{ color: "#635a5a" }}>
              {post.body}
            </Typography>
          </>
        )) || <Error message={isPostsError} />
      )}
    </Box>
  );
}
