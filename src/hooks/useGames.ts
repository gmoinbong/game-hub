import { GameQuery } from './../App';
import { useData } from './useData';
import { Genre } from './useGenres';

export interface Platform {
  id: number;
  name: string;
  slug: string
}

export interface Game {
  id: number;
  name: string;
  background_image: string,
  metacritic: number
  parent_platforms: { platform: Platform }[]
}

export const useGames = (gameQuery: GameQuery) =>
  useData<Game>('/games', {
    params: {
      genres: gameQuery.genre?.id,
      platforms: gameQuery.platform?.id,
      ordering: gameQuery.sortOrderItem,
      search: gameQuery.searchText
    }
  }, [gameQuery])
