import store from '@/store';

/* eslint-disable no-use-before-define */
export interface MovieImages {
  id: number;
  backdrops: MovieImage[];
  posters: MovieImage[];
}

export interface MovieImage {
  aspect_ratio: number;
  file_path: string;
  height: number;
  iso_639_1: string;
  vote_average: number;
  vote_count: number;
  width: number;
}

export interface SearchOptions {
  query: string;
  language?: string | undefined;
}

export interface InfoOptions {
  id: number;
  language?: string | undefined;
}

export interface SearchResults {
  page: number;
  results: SearchResult[];
  total_Pages: number;
  total_results: number;
}

export interface SearchResult {
  adult: boolean;
  backdrop_path: string;
  id: number;
  original_title: string;
  release_date: Date;
  poster_path: string;
  popularity: number;
  title: string;
  vote_average: number;
  vote_count: number;
}

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: any;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: number;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: Date;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  vote_average: number;
  vote_count: number;
}

export interface Genre {
  id: number;
  name: string;
}

export interface ProductionCompany {
  id: number;
  name: string;
}

export interface ProductionCountry {
  iso_3166_1: number;
  name: string;
}

export interface SpokenLanguage {
  iso_639_1: number;
  name: string;
}

export type RootState = ReturnType<typeof store.getState>;
