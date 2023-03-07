import { Box } from "@mui/system";
import React, { useMemo } from "react";
import { getPagesCount } from "../helper";

export default function Pagination ({ totalCount, limit, page, setPage }) {
  const pagesArray = useMemo (() => {
    const count = getPagesCount(totalCount, limit);
    const arr = [];
    for (let i = 1; i <= count; i++) {
      arr.push(i);
    }
    return arr;
  }, [totalCount, limit]);

  return (
    <Box className="pagination" display="flex" width="300px" margin="20px auto">
      {pagesArray.map((pageNumber) => (
        <Box
          key={pageNumber}
          onClick={() => setPage(pageNumber)}
          border="1px solid black"
          padding={1}
          sx={{
            cursor: "pointer",
            background: pageNumber === page && "grey",
          }}
        >
          {pageNumber}
        </Box>
      ))}
    </Box>
  );
};
