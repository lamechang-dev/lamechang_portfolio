export type Movie = {
  id: number;
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
  id: number;
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
