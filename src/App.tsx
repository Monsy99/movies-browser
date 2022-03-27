import React, { useEffect } from 'react';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { toMovie, toMovies, toPeople, toPerson } from './routes';
import { theme, darkTheme } from './theme';
import { GlobalStyle } from './GlobalStyle';
import MoviePage from './features/movies/MoviePage';
import MoviesPage from './features/movies/MoviesPage';
import PersonPage from './features/people/PersonPage';
import PeoplePage from './features/people/PeoplePage';
import Navigation from './common/Navigation';
import ScrollArrow from './common/ScrollArrow';
import { selectIsDark } from './themeSlice';
import { fetchGenres } from './features/genres/genresSlice';
import { selectLanguage } from './common/Navigation/LanguageSelect/languageSlice';

function App() {
  const isDark = useSelector(selectIsDark);
  const language = useSelector(selectLanguage);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGenres());
    // eslint-disable-next-line
  }, [language]);
  return (
    <HashRouter>
      <ThemeProvider theme={isDark ? darkTheme : theme}>
        <GlobalStyle />
        <Navigation />
        <ScrollArrow />
        <Routes>
          <Route path={toMovie({})} element={<MoviePage />} />
          <Route path={toMovies()} element={<MoviesPage />} />
          <Route path={toPerson({})} element={<PersonPage />} />
          <Route path={toPeople()} element={<PeoplePage />} />
          <Route path="/" element={<Navigate to={toMovies()} />} />
        </Routes>
      </ThemeProvider>
    </HashRouter>
  );
}
export default App;
