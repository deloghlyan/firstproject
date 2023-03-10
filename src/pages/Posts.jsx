import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import PostsList from "../components/PostsList";
import { PostService } from "../api/PostService";
import Pagination from "../components/Pagination";
import Loading from "../components/ui/Loading";
import Filtered from "../components/Filtered";
import { useFilter } from "../hooks/useFilter";
import { useFetching } from "../hooks/useFetching";
import Error from "../components/ui/Error";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState({ sort: "", search: "" });
  const sortedAndFilteredPosts = useFilter(posts, filter.sort, filter.search);
  const limit = 10;
  const [isPostsLoading, isPostsError, getData] = useFetching(async () => {
    const [posts, total] = await PostService.getAll(limit, page);
    setTotalCount(total);
    setPosts(posts);
  });

  useEffect(() => {
    getData(limit, page);
  }, [page]);

  if (isPostsError) {
    return <Error message={isPostsError} />;
  }

  return (
    <Box width="100%" height="100%">
      {isPostsLoading ? (
        <Loading />
      ) : (
        <>
          <Filtered filter={filter} setFilter={setFilter} />
          <PostsList posts={sortedAndFilteredPosts} setPosts={setPosts} />
          <Pagination
            totalCount={totalCount}
            limit={limit}
            page={page}
            setPage={setPage}
          />
        </>
      )}
    </Box>
  );
}
