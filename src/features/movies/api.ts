import { Genre, Movie } from '@/types';
import { apiKey, apiUrl } from '../../common/api';

type GetMoviesArgs = {
  query: string;
  page: number;
  language: string;
};

export const getMovies = async ({ query, page, language }: GetMoviesArgs) => {
  const url = query
    ? `${apiUrl}search/movie?api_key=${apiKey}&language=${language}&query=${query}&page=${page}`
    : `${apiUrl}movie/popular?api_key=${apiKey}&language=${language}&page=${page}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const movies = await response.json();

  return movies as Movie[];
};

type GetGenresArgs = {
  language: string;
};

export const getGenres = async ({ language }: GetGenresArgs) => {
  const response = await fetch(`${apiUrl}genre/movie/list?api_key=${apiKey}&language=${language}`);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const data = await response.json();

  return data.genres as Genre[];
};

type GetMovieDetailsArgs = {
  id: string;
  language: string;
};

export const getMovieDetails = async ({ id, language }: GetMovieDetailsArgs) => {
  const response = await fetch(`${apiUrl}movie/${id}?api_key=${apiKey}&language=${language}`);

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const movieDetails = await response.json();

  return movieDetails as Movie;
};

type GetMovieCreditsArgs = {
  id: string;
  language: string;
};

export const getMovieCredits = async ({ id, language }: GetMovieCreditsArgs) => {
  const response = await fetch(
    `${apiUrl}movie/${id}/credits?api_key=${apiKey}&language=${language}`,
  );

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const movieCredits = await response.json();

  return movieCredits;
};
