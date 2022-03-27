import React from 'react';
import StyledMoviesContainer from './styled';
import MovieTile from '../MovieTile';

function MoviesContainer({ movies }) {
  return (
    <StyledMoviesContainer>
      {movies.map((movie) => (
        <MovieTile key={movie.id} movie={movie} />
      ))}
    </StyledMoviesContainer>
  );
}

export default MoviesContainer;
