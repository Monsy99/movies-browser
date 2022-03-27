import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Error, Header, Loader, NoResults, Pager, Wrapper } from '@common/index';
import { noResults, popularMovies, searchingFor, searchResultsFor } from '@common/languages';

import { selectLanguage } from '../../../common/Navigation/LanguageSelect/languageSlice';
import pageQueryParamName from '../../pageQueryParamName';
import { useQueryParameter } from '../../search/queryParameters';
import searchQueryParamName from '../../searchQueryParamName';
import MoviesContainer from '../MoviesContainer';
import {
  fetchMovies,
  selectError,
  selectLoading,
  selectMovies,
  selectTotalNumberOfMovies,
} from '../moviesSlice';
import { Movie } from '@/types';

function MoviesPage() {
  const query = useQueryParameter(searchQueryParamName);
  const dispatch = useDispatch();
  const currentPage = useQueryParameter(pageQueryParamName);
  const language = useSelector(selectLanguage);
  const loading = useSelector(selectLoading);
  const movies: Movie[] = useSelector(selectMovies);
  const totalNumberOfMovies = useSelector(selectTotalNumberOfMovies);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchMovies({ page: currentPage, query, language }));
  }, [dispatch, currentPage, query, language]);

  if (error) {
    return (
      <Wrapper>
        <Error />
      </Wrapper>
    );
  }
  if (loading) {
    return (
      <Wrapper>
        <Header>{query ? `${searchingFor[language]} "${query}"` : popularMovies[language]}</Header>
        <Loader />
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      {movies.length ? (
        <>
          <Header>
            {query
              ? `${searchResultsFor[language]} "${query}" (${totalNumberOfMovies})`
              : popularMovies[language]}
          </Header>
          <MoviesContainer movies={movies} />
          <Pager />
        </>
      ) : (
        <>
          <Header>
            {noResults[language]}
            <q>{query}</q>
          </Header>
          <NoResults />
        </>
      )}
    </Wrapper>
  );
}
export default MoviesPage;
