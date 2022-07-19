import { useNavigate, useLocation } from 'react-router-dom';

export const useQueryParameter = (searchQueryParamName: string): string | null => {
  const location = useLocation();
  return new URLSearchParams(location.search).get(searchQueryParamName);
};

export const useReplaceQueryParameter = (restartQueries = false) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const navigate = useNavigate();

  return ({ key, value }) => {
    if (value) {
      searchParams.set(key, value);
    } else {
      searchParams.delete(key);
    }
    if (restartQueries && searchParams.get(key)) {
      navigate(`${location.pathname}?${key}=${searchParams.get(key).toString()}`);
    } else {
      // eslint-disable-next-line no-lonely-if
      if (searchParams) {
        navigate(`${location.pathname}?${searchParams.toString()}`);
      } else {
        navigate(`${location.pathname}`);
      }
    }
  };
};
