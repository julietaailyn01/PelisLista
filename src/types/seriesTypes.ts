export interface SeriesState {
  genres: [];
  id: number;
  loading: boolean;
  series: Series[];
  page: number;
  total_pages: number;
}

export type SeriesResponse = {
  page: number;
  results: Series[];
  total_pages: number;
};

export type Series = {
  id: number;
  name: string;
  poster_path: string;
  overview: string;
  vote_average: number;
};

export type SeriesDetails = {
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
  name: string;
  original_language: string;
  runtime: number;
  vote_average: number;
};
