import { useData } from './useData';

export interface Genre {
  id: number;
  name: string;
  image_background
}
export const useGenres = () => useData<Genre>('/genres') 
