import { useEffect, useState } from "react";

function useQuery<T>({ url }: { url: string }) {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [url]);

  return {
    data,
    isLoading,
    error,
  };
}

export default useQuery;
