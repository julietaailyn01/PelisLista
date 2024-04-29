export type Movies = {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  genres: [id: number, name: string];
  vote_average: number;
  release_date: string;
};

export type MoviesResponse = {
  page: number;
  results: Movies[];
  total_pages: number;
};

export interface MovieState {
  genres: [];
  id: number;
  loading: boolean;
  result: Movies[];
  page: number;
  total_pages: number;
}

export type MoviesDetails = {
  backdrop_path: string;
  genres: [
    {
      id: number;
      name: string;
    }
  ];
  id: number;
  overview: string;
  poster_path: string;
  original_title: string;
  title: string;
  original_language: string;
  release_date: string;
  runtime: number;
  vote_average: number;
};
