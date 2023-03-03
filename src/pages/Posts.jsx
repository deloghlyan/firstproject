import React, { useCallback, useEffect, useMemo, useState } from "react";
import axios from "axios";
import { Box, Button, CircularProgress } from "@mui/material";
import PostsList from "../components/PostsList";
import { getPagesCount } from "../helper";

export default function Posts() {
  const [posts, setPosts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [totalCount, setTotalCount] = useState();
  const [page, setPage] = useState(1);
  const limit = 10;

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      getData(limit, page);
    }, 1000);
  }, [page]);

  const pagesArray = useMemo(() => {
    const count = getPagesCount(totalCount, limit);
    const arr = [];
    for (let i = 1; i <= count; i++) {
      arr.push(i);
    }
    return arr;
  }, [totalCount, limit]);

  const getData = async (limit = 10, page = 1) => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts",
      {
        params: {
          _limit: limit,
          _page: page,
        },
      }
    );
    setPosts(response.data);
    setTotalCount(response.headers["x-total-count"]);
    setIsLoading(false);
  };

  const changePage = useCallback(
    (pageNumber) => {
      setPage(pageNumber);
    },
    [page]
  );

  const sortTitles = () => {
    setPosts([...posts].sort((a, b) => a.title.localeCompare(b.title)));
  }

  return (
    <>
      <Box>
        <Button onClick={() => sortTitles()}>Sort by: A - Z</Button>
      </Box>
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
          <>
            {posts && <PostsList posts={posts} setPosts={setPosts} />}
            <Box
              className="pagination"
              display="flex"
              justifyContent="space-between"
              width="35%"
              margin="20px auto"
            >
              {pagesArray.map((pageNumber) => (
                <Box
                  key={pageNumber}
                  onClick={() => changePage(pageNumber)}
                  border="1px solid grey"
                  padding={1}
                  sx={{
                    cursor: "pointer",
                    background: pageNumber === page && "lightgrey",
                  }}
                >
                  {pageNumber}
                </Box>
              ))}
            </Box>
          </>
        )}
      </Box>
    </>
  );
}
