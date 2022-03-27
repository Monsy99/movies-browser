import { createSlice } from '@reduxjs/toolkit';
import { Movie, RootState } from '@/types';

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    loading: true,
    movies: [] as Movie[],
    movie: null as Movie | null,
    allPages: 1,
    totalNumberOfMovies: 0,
    error: false,
  },
  reducers: {
    fetchMovies: (state) => {
      state.error = false;
      state.loading = true;
      state.movies = [];
    },
    fetchMoviesSuccess: (
      state,
      {
        payload: { movies, totalPages, totalResults },
      }: { payload: { movies: Movie[]; totalPages: number; totalResults: number } },
    ) => {
      state.movies = movies;
      state.allPages = totalPages;
      state.totalNumberOfMovies = totalResults;
      state.loading = false;
    },
    fetchMovie: (state) => {
      state.error = false;
      state.loading = true;
    },
    fetchMovieSuccess: (state, { payload: movie }: { payload: Movie }) => {
      state.movie = movie;
      state.loading = false;
    },
    fetchError: (state) => {
      state.error = true;
      state.loading = false;
    },
  },
});

export const selectMoviesState = (state: RootState) => state.movies;
export const selectLoading = (state: RootState): boolean => selectMoviesState(state).loading;
export const selectMovies = (state: RootState) => selectMoviesState(state).movies;
export const selectMovie = (state: RootState) => selectMoviesState(state).movie;
export const selectAllMoviesPages = (state: RootState) => selectMoviesState(state).allPages;
export const selectTotalNumberOfMovies = (state: RootState) =>
  selectMoviesState(state).totalNumberOfMovies;
export const selectError = (state: RootState): boolean => selectMoviesState(state).error;

export const { fetchMovies, fetchMoviesSuccess, fetchMovie, fetchMovieSuccess, fetchError } =
  moviesSlice.actions;
export default moviesSlice.reducer;
