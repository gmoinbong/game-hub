import { CanceledError } from 'axios';
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

export const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false)

  interface Genre {
    id: number;
    name: string
  }

  interface GenresResponse {
    count: number;
    results: Genre[];

  }

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true)
    apiClient
      .get<GenresResponse>("/genres", { signal: controller.signal })
      .then((res) => {
        setGenres(res.data.results)
        setLoading(false)
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message)
        setLoading(false)
      });

    return () => controller.abort();
  }, []);
  return { genres, error, isLoading }
}