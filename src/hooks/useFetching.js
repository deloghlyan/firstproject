import { useState } from "react";

export function useFetching(callback) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  async function fetching(limit, page) {
    try {
      setIsLoading(true);
      await callback(limit, page);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  return [isLoading, error, fetching];
}