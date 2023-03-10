import { useMemo } from "react";

export function useSort(sort, posts) {
  const sortedPosts = useMemo(() => {
    if (sort) {
      return [...posts].sort((a, b) =>
        a[sort].localeCompare(b[sort])
      );
    }
    return posts;
  }, [posts, sort]);

  return sortedPosts;
}

export function useFilter(posts, sort, query) {
  const sortedPosts = useSort(sort, posts);
  const sortedAndFilteredPosts = useMemo(() => {
    return sortedPosts.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
  }, [sortedPosts, query]);

  return sortedAndFilteredPosts;
}
