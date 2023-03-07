import React, { useEffect, useMemo, useState } from "react";
import { Box } from "@mui/material";
import PostsList from "../components/PostsList";
import { PostService } from "../api/PostService";
import Pagination from "../components/Pagination";
import Loading from "../components/ui/Loading";
import Filtered from "../components/Filtered";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalCount, setTotalCount] = useState(0);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState({ sort: "", search: "" });
  const limit = 10;

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      getData(limit, page);
    }, 1000);
  }, [page]);

  const getData = async () => {
    const [posts, total] = await PostService.getAll(limit, page);
    setTotalCount(total);
    setPosts(posts);
    setIsLoading(false);
  };

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    }
    return posts;
  }, [posts, filter.sort]);

  const sortedAndFilteredPosts = useMemo(() => {
    return sortedPosts.filter((item) =>
      item.title.toLowerCase().includes(filter.search.toLowerCase())
    );
  }, [sortedPosts, filter.search]);

  return (
    <Box width="100%" height="100%">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Filtered filter={filter} setFilter={setFilter} />
          <PostsList posts={sortedAndFilteredPosts} />
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
