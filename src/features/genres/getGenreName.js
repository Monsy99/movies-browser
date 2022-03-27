export default (genreId, genres) =>
  genres.find((genre) => genreId === genre.id).name;
