import { Genre } from '@/types';

export default (genreId: number, genres: Genre[]) =>
  genres.find((genre) => genreId === genre.id).name;
