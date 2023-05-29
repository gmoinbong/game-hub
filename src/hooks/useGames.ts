import { CanceledError } from 'axios'
import { useState, useEffect } from 'react';
import apiClient from '../services/api-client';

export interface Game {
  id: number;
  name: string;
  background_image: string
}

interface GamesResponse {
  count: number;
  results: Game[]
}

export const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<GamesResponse>("/games", { signal: controller.signal })
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message)
      });

    return () => controller.abort();
  }, []);
  return { games, error }
}