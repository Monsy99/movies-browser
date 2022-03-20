import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { toMovies, toPeople } from '../../routes';

const SEARCH_DELAY = 500;

export const useOnInputSearchChange = (setInputValue) => {
  const timeoutRef = useRef<NodeJS.Timeout>();
  const navigate = useNavigate();

  return ({ newValue, atMovies }) => {
    clearTimeout(timeoutRef.current);
    setInputValue(newValue);

    timeoutRef.current = setTimeout(() => {
      navigate({
        pathname: atMovies ? toMovies() : toPeople(),
        search: newValue ? `search=${newValue}` : '',
      });
    }, SEARCH_DELAY);
  };
};
