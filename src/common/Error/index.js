import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import noConnect from '../../images/noConnect.svg';
import {
  ErrorContainer, ErrorImg, ErrorTitle, ErrorText, ReturnButton,
} from './styled';
import { toMovies } from '../../routes';
import { selectLanguage } from '../Navigation/LanguageSelect/languageSlice';
import { errorText, errorTitle, returnButton } from '../languages';

function NoConnection() {
  const language = useSelector(selectLanguage);

  return (
    <ErrorContainer>
      <ErrorImg src={noConnect} alt="noConnectImage" />
      <ErrorTitle>{errorTitle[language]}</ErrorTitle>
      <ErrorText>{errorText[language]}</ErrorText>
      <ReturnButton as={Link} to={toMovies()}>{returnButton[language]}</ReturnButton>
    </ErrorContainer>
  );
}

export default NoConnection;
