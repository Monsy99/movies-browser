export const toMovie = ({ id = ':id' }: { id?: string }) => `/movies/${id}`;
export const toMovies = () => '/movies';
export const toPerson = ({ id = ':id' }: { id?: string }) => `/people/${id}`;
export const toPeople = () => '/people';
