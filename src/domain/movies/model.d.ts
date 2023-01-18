export type Movie = {
  title: string;
  globalRate?: number;
  personalRate?: number;
  thumbnail?: string;
  largeThumbnail?: string;
  link?: string;
  genres: Array<Genre>;
  overview?: string;
};

export type MyFavoriteMovie = {
  title: string;
  globalRate?: number;
  personalRate?: number;
  thumbnail?: string;
  largeThumbnail?: string;
  link?: string;
  genreIds?: Array<Genre["id"]>;
  overview?: string;
};

export type MovieList = Array<Movie>;
