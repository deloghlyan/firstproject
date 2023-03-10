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
          border="1px solid #e8e3e3"
          padding={1}
          sx={{
            cursor: "pointer",
            background: pageNumber === page && "#c7bdbd",
            color: "#706060",
            margin: "0 5px"
          }}
        >
          {pageNumber}
        </Box>
      ))}
    </Box>
  );
};
