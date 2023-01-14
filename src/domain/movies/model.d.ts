type MovieGenreId = number;

export type Genre = {
  id?: MovieGenreId;
  name?: string;
};

export type Movie = {
  title: string;
  globalRate?: number;
  personalRate?: number;
  thumbnail?: string;
  link?: string;
  genres: Array<Genre>;
  overview?: string;
};

export type MyFavoriteMovie = {
  title: string;
  globalRate?: number;
  personalRate?: number;
  thumbnail?: string;
  link?: string;
  genreIds?: Array<Genre["id"]>;
  overview?: string;
};

export type MovieList = Array<Movie>;
