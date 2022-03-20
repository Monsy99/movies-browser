import React from 'react';
import loadingCircle from '../../images/Loading.svg';
import { LoadingImg, LoadingContainer } from './styled';

function Loader() {
  return (
    <LoadingContainer>
      <LoadingImg src={loadingCircle} />
    </LoadingContainer>
  );
}

export default Loader;
