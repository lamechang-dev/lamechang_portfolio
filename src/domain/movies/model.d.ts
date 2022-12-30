export type Movie = {
  title: string;
  globalRate?: number;
  personalRate?: number;
  thumbnail?: string;
  link?: string;
};

export type MovieList = Array<Movie>;
