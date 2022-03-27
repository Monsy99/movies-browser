import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { toMovies, toPeople } from '../../routes';

const useOnInputSearchChange = (setInputValue) => {
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();
  const navigate = useNavigate();

  return ({ newValue, atMovies }) => {
    clearTimeout(timeoutRef.current);
    setInputValue(newValue);

    timeoutRef.current = setTimeout(() => {
      navigate({
        pathname: atMovies ? toMovies() : toPeople(),
        search: newValue ? `search=${newValue}` : '',
      });
    }, +process.env.REACT_APP_SEARCH_DELAY);
  };
};

export default useOnInputSearchChange;
